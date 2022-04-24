import type { FC } from 'react';
import React, { useCallback, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import { useRecoilState } from 'recoil';

import { Button } from '~/components/ui/Button';
import { Text } from '~/components/ui/Text';
import { TextInput } from '~/components/ui/TextInput';
import { View } from '~/components/ui/View';
import { useSignOut } from '~/hooks/supabase';
import { shoes } from '~/stores/shoes';
import { user } from '~/stores/user';
import { layoutStyle } from '~/styles';
import type { ProfileScreenProps as Props } from '~/types';
import { supabaseClient } from '~/utils/supabase';
import { toastKit } from '~/utils/toastKit';

export type ProfileEditScreenProps = Props<'ProfileEditScreen'>;

type FormDataType = {
  name: string;
  brand: string;
  shoesName: string;
  profile: string;
};

export const ProfileEdit: FC<ProfileEditScreenProps> = ({ navigation }) => {
  const { onSignOut } = useSignOut();
  const [userInfo, setUserInfo] = useRecoilState(user);
  const [shoesInfo, setShoesInfo] = useRecoilState(shoes);

  const {
    control,
    reset,
    handleSubmit: onSubmit,
    formState: { errors: _ },
  } = useForm<FormDataType>();

  const onUserInfoUpdate = useCallback(async (data: FormDataType) => {
    if (!userInfo?.user || !shoesInfo) return;

    const { errorToast, successToast } = toastKit('送信しています');

    const userUpdatePromise = supabaseClient
      .from('user')
      .update({
        name: data.name,
        profile: data.profile,
      })
      .eq('id', userInfo.user.id);
    const shoesUpdatePromise = supabaseClient
      .from('shoes')
      .update({
        brand: data.brand,
        shoes: data.shoesName,
      })
      .eq('id', shoesInfo.id);

    const [{ error: userUpdateError }, { error: shoesUpdateError }] = await Promise.all([
      userUpdatePromise,
      shoesUpdatePromise,
    ]);

    if (userUpdateError || shoesUpdateError) {
      errorToast('プロフィールの更新に失敗しました');
    }

    successToast('プロフィールを更新しました');
    setShoesInfo((prevState) => {
      return { ...prevState, brand: data.brand, shoes: data.shoesName };
    });
    setUserInfo((prevState) => {
      return prevState
        ? {
            ...prevState,
            user: prevState.user
              ? { ...prevState.user, name: data.name, profile: data.profile }
              : null,
          }
        : null;
    });
    navigation.navigate('ProfileScreen');
  }, []);

  useEffect(() => {
    reset({
      name: userInfo?.user?.name,
      brand: shoesInfo?.brand,
      shoesName: shoesInfo?.shoes,
      profile: userInfo?.user?.profile,
    });
  }, [userInfo, shoesInfo]);

  return (
    <View style={layoutStyle.modal}>
      <Text style={style.from_label}>ユーザー名</Text>
      <Controller
        control={control}
        name="name"
        render={({ field: { value, onChange } }) => (
          <TextInput value={value} textStyle={style.input_text} onChangeText={onChange} bg="bg1" />
        )}
      />

      <Text style={style.from_label}>愛用しているランニングシューズのブランド</Text>
      <Controller
        control={control}
        name="brand"
        render={({ field: { value, onChange } }) => (
          <TextInput value={value} textStyle={style.input_text} onChangeText={onChange} bg="bg1" />
        )}
      />

      <Text style={style.from_label}>愛用しているランニングシューズ名</Text>
      <Controller
        control={control}
        name="shoesName"
        render={({ field: { value, onChange } }) => (
          <TextInput value={value} textStyle={style.input_text} onChangeText={onChange} bg="bg1" />
        )}
      />

      <Text style={style.from_label}>プロフィール文</Text>
      <Controller
        control={control}
        name="profile"
        render={({ field: { value, onChange } }) => (
          <TextInput
            multiline
            numberOfLines={4}
            value={value}
            viewStyle={style.input_text_view}
            textStyle={style.input_text}
            onChangeText={onChange}
            bg="bg1"
          />
        )}
      />

      <Button
        label="更新する"
        color="color0"
        bg="primary"
        outlineStyle={style.button_outline}
        onPress={onSubmit(onUserInfoUpdate)}
      />

      <Button label="サインアウト" onPress={onSignOut} />
    </View>
  );
};

const style = StyleSheet.create({
  from_label: {
    paddingLeft: '1%',
    paddingVertical: '4%',
  },
  button_outline: {
    marginTop: '6%',
  },
  input_text_view: {
    height: 120,
    paddingBottom: 6,
  },
  input_text: {
    fontSize: 16,
  },
});
