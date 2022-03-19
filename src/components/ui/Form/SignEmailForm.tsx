import type { FC } from 'react';
import { useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';

import { Button } from '~/components/ui/Button';
import { Text } from '~/components/ui/Text';
import { TextInput } from '~/components/ui/TextInput';

type Props = {
  onSignEmail: (...args: string[]) => void;
};

export const SignEmailForm: FC<Props> = ({ onSignEmail }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = useCallback((value: string) => setEmail(value.trim()), []);
  const onChangePassword = useCallback((value: string) => setPassword(value.trim()), []);

  return (
    <>
      <Text style={style.label}>メールアドレス</Text>
      <TextInput value={email} onChangeText={onChangeEmail} />

      <Text style={style.label}>パスワード</Text>
      <TextInput value={password} onChangeText={onChangePassword} secureTextEntry />

      <Button
        label="サインアップ"
        color="color0"
        bg="primary"
        outlineStyle={style.button_outline}
        onPress={() => onSignEmail(email, password)}
      />
    </>
  );
};

const style = StyleSheet.create({
  label: {
    paddingLeft: '1%',
    paddingVertical: '4%',
  },
  button_outline: {
    marginTop: '6%',
  },
});
