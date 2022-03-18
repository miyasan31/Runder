import 'react-native-url-polyfill/auto';

import type { PostgrestError, PostgrestResponse } from '@supabase/supabase-js';
import { useCallback, useEffect, useState } from 'react';
import { useSnapshot } from 'valtio';

import { user } from '~/stores/user';
import type { Record, Tournament } from '~/types/model';
import { supabaseClient } from '~/utils/supabase';

const TOURNAMENT_FROM = 'tournament';
const TOURNAMENT_COLUMN = 'id, name, distance, start, end, image, term, count';
const TOURNAMENT_ORDER = 'created_at';

const RECORD_FROM = 'record';
const RECORD_COLUMN = 'id, record';
const RECORD_ORDER = 'record';
const RECORD_LIMIT = 1;
const RECORD_EQUAL_1 = 'user_id';
const RECORD_EQUAL_2 = 'tournament_id';

type BestRecordResult = {
  tournament: Tournament;
  record: PostgrestResponse<Record>;
};

type ChallengeTournamentResult = {
  loading: boolean;
  error?: PostgrestError | null;
  data?: {
    tournament: Tournament;
    record: Record;
    count: number;
  }[];
};

export const useChallengeList = () => {
  const userSnapshot = useSnapshot(user);

  const [challenges, setChallenges] = useState<ChallengeTournamentResult>({
    loading: true,
    error: undefined,
    data: undefined,
  });

  const fetchChallengeList = useCallback(async () => {
    const { data: tournament_data, error } = await supabaseClient
      .from<Tournament>(TOURNAMENT_FROM)
      .select(TOURNAMENT_COLUMN)
      .order(TOURNAMENT_ORDER);

    if (error) {
      setChallenges((prev) => {
        return { ...prev, loading: false, error: error };
      });
      return;
    }

    if (tournament_data) {
      const promiseRecord = tournament_data.map(async (_tournament_data) => {
        return {
          tournament: _tournament_data,
          record: await supabaseClient
            .from<Record>(RECORD_FROM)
            .select(RECORD_COLUMN, { count: 'exact' })
            .match({
              [RECORD_EQUAL_1]: userSnapshot.id,
              [RECORD_EQUAL_2]: _tournament_data.id,
            })
            .limit(RECORD_LIMIT)
            .order(RECORD_ORDER),
        };
      });

      const recordResult = await Promise.all([...promiseRecord]);

      const errorResult = recordResult.find((_recordResult) => {
        return _recordResult.record.error;
      });

      if (errorResult) {
        setChallenges((prev) => {
          return { ...prev, loading: false, error: errorResult.record.error };
        });
        return;
      }

      const recordFilterResult = recordResult
        .filter((response: BestRecordResult) => response.record.count !== 0)
        .map((response: BestRecordResult) => {
          return {
            tournament: response.tournament,
            // TODO:ここの型解決一生わからん
            count: response.record.count as number,
            record: (response.record.data ? response.record.data[0] : null) as Record,
          };
        });

      setChallenges({
        loading: false,
        error: undefined,
        data: recordFilterResult,
      });
    }
  }, [userSnapshot.id]);

  useEffect(() => {
    fetchChallengeList();
  }, [fetchChallengeList]);

  return { ...challenges };
};
