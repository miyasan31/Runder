import type { FC } from 'react';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useRecoilValue } from 'recoil';

import { Image } from '~/components/ui/Image';
import { user } from '~/stores/user';

export const UserAvatar: FC = () => {
  const userInfo = useRecoilValue(user);

  useEffect(() => {
    console.info(userInfo.avatar);
  }, [userInfo]);

  return <Image source={{ uri: userInfo.avatar }} border="border1" style={style.user_icon} />;
};

const style = StyleSheet.create({
  user_icon: {
    width: 110,
    height: 110,
    borderRadius: 999,
    // borderWidth: 1.25,
  },
});
