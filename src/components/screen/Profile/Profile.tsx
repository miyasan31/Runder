import 'react-native-url-polyfill/auto';

import type { FC } from 'react';
import React, { useCallback, useState } from 'react';
// import { toast } from 'react-hot-toast/src/core/toast';
import { Image, StyleSheet } from 'react-native';

import { Button } from '~/components/ui/Button';
import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import { onSignOut } from '~/utils/supabase';

// import { toastKit } from '~/utils/toastKit';
import { HistoryTab } from './History.tab';
import { ProfileEditModal } from './modal';
import type { ProfileScreenProps } from './ScreenProps';

export const Profile: FC<ProfileScreenProps> = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const onCloseModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setModalVisible(true);
  }, []);

  // const onPress = async () => {
  //   const { errorToast, successToast } = toastKit();
  //   // delay 1s
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  //   errorToast();

  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  //   successToast('成功しました');
  // };

  // const onPressPromise = async () => {
  //   const myPromise = new Promise((resolve) => setTimeout(resolve, 2000));
  //   toast.promise(
  //     myPromise,
  //     {
  //       loading: 'Loading',
  //       error: 'Error when fetching',
  //       success: 'Got the data',
  //     },
  //     {
  //       style: {
  //         minWidth: '250px',
  //       },
  //       loading: {
  //         duration: 3000,
  //         icon: '🔥',
  //       },
  //       error: {
  //         duration: 3000,
  //         icon: '🔥',
  //       },
  //       success: {
  //         duration: 3000,
  //         icon: '🔥',
  //       },
  //     },
  //   );
  // };

  return (
    <>
      <ProfileEditModal isVisible={isModalVisible} onCloseModal={onCloseModal} />

      <View style={style.user_info_box}>
        <View style={style.align_horizontal}>
          <View style={style.left_box}>
            <Image source={require('assets/develop/lilnasx.png')} style={style.user_icon} />
          </View>
          <View style={style.right_box}>
            <Button
              label="プロフィール編集"
              outlineStyle={style.button_outline}
              viewStyle={style.button_bg}
              textStyle={style.button_text}
              isBorder
              onPress={onOpenModal}
            />
            <Button
              label="サインアウト"
              outlineStyle={style.button_outline}
              viewStyle={style.button_bg}
              textStyle={style.button_text}
              isBorder
              onPress={onSignOut}
            />
            <Text>ランキング</Text>
            <Text>1位</Text>
          </View>
        </View>

        <View style={style.profile_box}>
          <Text>R.KWMR</Text>
          <Text>ナイキ ズームライバル フライ</Text>
          <Text>高校まで陸上部</Text>
          <Text>中距離ランナー</Text>
          <Text>得意な種目は800mと1500m</Text>
          <Text>2000m以上は苦手です...</Text>
        </View>
      </View>

      <View style={style.tab_box}>
        <HistoryTab {...props} />
      </View>
    </>
  );
};

const style = StyleSheet.create({
  user_info_box: {
    paddingHorizontal: '8%',
  },
  align_horizontal: {
    marginTop: 60,
    flexDirection: 'row',
  },
  left_box: {
    flex: 1,
  },
  right_box: {
    flex: 1,
  },
  profile_box: {
    paddingVertical: '8%',
  },
  user_icon: {
    marginTop: '25%',
    width: 100,
    height: 100,
  },
  button_outline: {
    flex: 1,
    alignItems: 'flex-end',
  },
  button_bg: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  button_text: {
    fontSize: 12,
  },
  tab_box: {
    flex: 1,
  },
});
