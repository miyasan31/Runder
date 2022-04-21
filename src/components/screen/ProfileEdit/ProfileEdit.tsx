import type { FC } from 'react';
import React, { useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';

import { Button } from '~/components/ui/Button';
import { Text } from '~/components/ui/Text';
import { TextInput } from '~/components/ui/TextInput';
import { View } from '~/components/ui/View';
import { useSignOut } from '~/hooks/supabase';
import { layoutStyle } from '~/styles';
import type { ProfileScreenProps as Props } from '~/types';

export type ProfileEditScreenProps = Props<'ProfileEditScreen'>;

export const ProfileEdit: FC<ProfileEditScreenProps> = () => {
  const { onSignOut } = useSignOut();
  const [name, setName] = useState('');

  const onChangeName = useCallback((value: string) => {
    setName(value);
  }, []);

  return (
    <View style={layoutStyle.modal}>
      <Text style={style.from_label}>ユーザー名</Text>
      <TextInput value={name} textStyle={style.input_text} onChangeText={onChangeName} bg="bg1" />

      <Text style={style.from_label}>愛用しているランニングシューズのブランド</Text>
      <TextInput value={name} textStyle={style.input_text} onChangeText={onChangeName} bg="bg1" />

      <Text style={style.from_label}>愛用しているランニングシューズ名</Text>
      <TextInput value={name} textStyle={style.input_text} onChangeText={onChangeName} bg="bg1" />

      <Text style={style.from_label}>プロフィール文</Text>
      <TextInput
        multiline
        numberOfLines={4}
        value={name}
        viewStyle={style.input_text_view}
        textStyle={style.input_text}
        onChangeText={onChangeName}
        bg="bg1"
      />

      <Button label="登録する" color="color0" bg="primary" outlineStyle={style.button_outline} />

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
