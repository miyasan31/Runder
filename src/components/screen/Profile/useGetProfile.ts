import { useCallback, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { shoes } from '~/stores/shoes';
import { user } from '~/stores/user';
import type { Shoes } from '~/types/model';
import { supabaseClient } from '~/utils/supabase';

const FROM = 'shoes';
const COLUMN = 'id, brand, shoes';
const EQUAL = 'user_id';
const ORDER = 'created_at';

export const useGetProfile = () => {
  const userInfo = useRecoilValue(user);
  const [shoesInfo, setShoesInfo] = useRecoilState(shoes);

  const fetchShoes = useCallback(async () => {
    if (!userInfo?.user) return;

    const { data } = await supabaseClient
      .from<Shoes>(FROM)
      .select(COLUMN)
      .eq(EQUAL, userInfo?.user?.id)
      .order(ORDER, {
        ascending: false,
      })
      .limit(1);

    if (data) setShoesInfo(data[0]);
  }, []);

  useEffect(() => {
    fetchShoes();
  }, [userInfo?.user]);

  return { userInfo, shoesInfo };
};
