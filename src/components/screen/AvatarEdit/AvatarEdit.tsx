import {
  launchImageLibraryAsync,
  MediaTypeOptions,
  requestMediaLibraryPermissionsAsync,
} from 'expo-image-picker';
import type { FC } from 'react';
import React, { useCallback, useState } from 'react';
import { Alert, Platform, StyleSheet } from 'react-native';
import { useRecoilState } from 'recoil';

import { Button } from '~/components/ui/Button';
import { Image } from '~/components/ui/Image';
import { View } from '~/components/ui/View';
import { checkExtension } from '~/functions/checkExtension';
import { sleep } from '~/functions/sleep';
import { user } from '~/stores/user';
import { layoutStyle } from '~/styles';
import type { ProfileScreenProps as Props } from '~/types';
import { supabaseClient } from '~/utils/supabase';
import { toastKit } from '~/utils/toastKit';

export type AvatarEditScreenProps = Props<'AvatarEditScreen'>;

export const AvatarEdit: FC<AvatarEditScreenProps> = ({ navigation }) => {
  const [userInfo, setUserInfo] = useRecoilState(user);
  const [avatarImageUri, setAvatarImageUri] = useState<string>('');

  const onPickImage = useCallback(async () => {
    if (Platform.OS !== 'web') {
      const { status } = await requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('写真へのアクセスを許可してください');
        return;
      }
    }

    const result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setAvatarImageUri(result.uri);
    }
  }, []);

  const onAvatarUpload = useCallback(async () => {
    const fileExtension = checkExtension(avatarImageUri);

    const formData = new FormData();
    formData.append('files', {
      uri: avatarImageUri,
      name: `${userInfo.id}.${fileExtension}`,
      type: `image/${fileExtension}`,
    });

    const { errorToast, successToast } = toastKit();

    const { error: fileUploadError } = await supabaseClient.storage
      .from('public')
      .upload(`avatar/${userInfo.id}.${fileExtension}`, formData, {
        upsert: true,
      });
    if (fileUploadError) {
      errorToast('アップロードに失敗しました');
      return;
    }

    const { publicURL, error: publicUrlError } = supabaseClient.storage
      .from('public')
      .getPublicUrl(`avatar/${userInfo.id}.${fileExtension}`);
    if (publicUrlError) {
      errorToast('アップロードに失敗しました');
      return;
    }
    if (!publicURL) {
      errorToast('アップロードに失敗しました');
      return;
    }

    const { error: userUpdateError } = await supabaseClient
      .from('user')
      .update({
        avatar: publicURL,
      })
      .eq('id', userInfo.id);
    if (userUpdateError) return;

    successToast('アバターを更新しました');
    setUserInfo((prevState) => {
      return { ...prevState, avatar: publicURL };
    });

    await sleep(600);
    navigation.navigate('ProfileScreen');
  }, [avatarImageUri]);

  return (
    <View style={layoutStyle.modal}>
      <View style={style.align_horizontal}>
        <View bg="bg2" style={style.user_icon_box}>
          <Image source={{ uri: avatarImageUri || userInfo.avatar }} style={style.user_icon} />
        </View>

        <Button
          label="変更する"
          isBorder
          outlineStyle={style.change_button_outline}
          viewStyle={style.change_button_bg}
          textStyle={style.change_button_text}
          onPress={onPickImage}
        />
      </View>

      <Button
        label="保存する"
        bg="primary"
        color="white"
        outlineStyle={style.button_outline}
        onPress={onAvatarUpload}
      />
    </View>
  );
};

const style = StyleSheet.create({
  align_horizontal: {
    marginTop: '15%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  user_icon_box: {
    width: 'auto',
    padding: 10,
  },
  user_icon: {
    width: 120,
    height: 120,
    borderRadius: 999,
  },
  change_button_outline: {
    width: '40%',
    marginTop: '5%',
    marginLeft: '10%',
  },
  change_button_bg: {
    paddingVertical: 12,
  },
  change_button_text: {
    fontSize: 15,
  },
  button_outline: {
    marginTop: '10%',
  },
});
