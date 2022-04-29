import { useCallback, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { shoes } from '~/stores/shoes';
import { user } from '~/stores/user';
import type { Shoes } from '~/types/model';
import { supabaseSelect } from '~/utils/supabase';

export const useGetProfile = () => {
  const userInfo = useRecoilValue(user);
  const [shoesInfo, setShoesInfo] = useRecoilState(shoes);

  const fetchShoes = useCallback(async () => {
    const { data } = await supabaseSelect<Shoes>('shoes', {
      filter: (query) =>
        query
          .select('id, brand, shoes')
          .eq('user_id', userInfo.id)
          .order('created_at', {
            ascending: false,
          })
          .limit(1),
    });

    if (data) setShoesInfo(data[0]);
  }, []);

  useEffect(() => {
    fetchShoes();
  }, []);

  return { userInfo, shoesInfo };
};
