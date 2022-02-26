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

      <View style={style.container} bgTheme="bg1">
        <View style={style.userInfoContainer}>
          <View style={style.row}>
            <View style={style.leftContainer}>
              <Image source={require('assets/develop/lilnasx.png')} style={style.userIcon} />
            </View>
            <View style={style.rightContainer}>
              <Button
                label="プロフィール編集"
                outlineStyle={style.buttonOutline}
                bgStyle={style.buttonBg}
                textStyle={style.buttonText}
                isBorder
                onPress={onOpenModal}
              />
              <Button
                label="サインアウト"
                outlineStyle={style.buttonOutline}
                bgStyle={style.buttonBg}
                textStyle={style.buttonText}
                isBorder
                onPress={onSignOut}
              />
              <Text>ランキング</Text>
              <Text>1位</Text>
            </View>
          </View>

          <View style={style.profileContainer}>
            <Text>R.KWMR</Text>
            <Text>ナイキ ズームライバル フライ</Text>
            <Text>高校まで陸上部</Text>
            <Text>中距離ランナー</Text>
            <Text>得意な種目は800mと1500m</Text>
            <Text>2000m以上は苦手です...</Text>
          </View>
        </View>

        <View style={style.container}>
          <HistoryTab {...props} />
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoContainer: {
    paddingHorizontal: '8%',
  },
  profileContainer: {
    paddingVertical: '8%',
  },
  row: {
    marginTop: 60,
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    flex: 1,
  },
  userIcon: {
    marginTop: '25%',
    width: 100,
    height: 100,
  },
  buttonOutline: {
    flex: 1,
    alignItems: 'flex-end',
  },
  buttonBg: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    fontSize: 12,
  },
});
