import {
  launchImageLibraryAsync,
  MediaTypeOptions,
  requestMediaLibraryPermissionsAsync,
} from 'expo-image-picker';
import type { FC } from 'react';
import React, { useCallback, useState } from 'react';
import { Alert, Platform, StyleSheet } from 'react-native';

import { Button } from '~/components/ui/Button';
import { Image } from '~/components/ui/Image';
import { View } from '~/components/ui/View';
import { layoutStyle } from '~/styles';
import type { ProfileScreenProps as Props } from '~/types';

export type AvatarEditScreenProps = Props<'AvatarEditScreen'>;

export const AvatarEdit: FC<AvatarEditScreenProps> = () => {
  const [image, setImage] = useState<string | null>(null);

  const onPickImage = useCallback(async () => {
    if (Platform.OS !== 'web') {
      const { status } = await requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('写真へのアクセスを許可してください');
        return;
      }
    }

    const result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  }, []);

  return (
    <View style={layoutStyle.modal}>
      <View style={style.align_horizontal}>
        <View bg="bg2" style={style.user_icon_box}>
          <Image
            source={image ? { uri: image } : require('assets/develop/lilnasx.png')}
            style={style.user_icon}
          />
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

      <Button label="保存する" bg="primary" color="white" outlineStyle={style.button_outline} />
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
  indicator: {
    width: 120,
    paddingVertical: 60,
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
