import 'react-native-url-polyfill/auto';

import type { PostgrestError } from '@supabase/supabase-js';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { user } from '~/stores/user';
import type { Record } from '~/types/model';
import { supabaseSelect } from '~/utils/supabase';

export type ChallengeTournament = Record & { count: number | null };

export type ChallengeTournamentResult = {
  loading: boolean;
  error?: PostgrestError;
  data?: ChallengeTournament[];
};

export const useChallengeList = () => {
  const userInfo = useRecoilValue(user);

  const [challenges, setChallenges] = useState<ChallengeTournamentResult>({
    loading: true,
    error: undefined,
    data: undefined,
  });

  const fetchChallengeList = useCallback(async () => {
    const { data: best_record, error } = await supabaseSelect<Record>('record', {
      columns:
        'id, record, created_at, tournament(id, name, distance, start, end, term,  count, tournament_design(image_semi))',
      filter: (query) => query.eq('user_id', userInfo.id).eq('isBest', true).order('created_at'),
    });

    if (error || !best_record) {
      setChallenges({ loading: false, error: error, data: undefined });
      return;
    }

    const countPromise = best_record.map(async (record) => {
      const { count } = await supabaseSelect<Record>('record', {
        options: { count: 'exact' },
        filter: (query) =>
          query.eq('tournament_id', record.tournament.id).eq('user_id', userInfo.id),
      });
      return { ...record, count };
    });
    const result = await Promise.all(countPromise);

    setChallenges({
      loading: false,
      error: undefined,
      data: result,
    });
  }, [userInfo.id]);

  useEffect(() => {
    fetchChallengeList();
  }, [fetchChallengeList]);

  return { ...challenges };
};
