import type { VFC } from 'react';
import { useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';

import { Button } from '~/components/ui/Button';
import { Text } from '~/components/ui/Text';
import { TextInput } from '~/components/ui/TextInput';

type Props = {
  onSignEmail: (...args: string[]) => void;
};

export const SignEmailForm: VFC<Props> = ({ onSignEmail }) => {
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
        textTheme="text0"
        bgTheme="primary"
        outlineStyle={style.buttonOutline}
        onPress={() => onSignEmail(email, password)}
      />
    </>
  );
};

const style = StyleSheet.create({
  label: {
    lineHeight: 30,
    paddingLeft: '1%',
  },
  buttonOutline: {
    marginTop: '5%',
  },
});
