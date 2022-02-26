import type { Session } from '@supabase/supabase-js';
import type { VFC } from 'react';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import type { UserRegisterScreenProps } from '~/components/screen/UserRegister';
import { Button } from '~/components/ui/Button';
import { DatePicker } from '~/components/ui/DatePicker';
import { Radio } from '~/components/ui/Radio';
import { Text } from '~/components/ui/Text';
import { TextInput } from '~/components/ui/TextInput';
import { BounceableView, View } from '~/components/ui/View';
import { supabaseClient } from '~/utils/supabase';

const radio_group = [
  { id: 1, active: true, label: '男性' },
  { id: 2, active: false, label: '女性' },
];

export const UserRegister: VFC<UserRegisterScreenProps> = () => {
  const [name, setName] = useState('');
  const [sex, onSelectSex] = useState<boolean | null>(null);
  const [birthday, onSetBirthday] = useState<Date | null>(null);
  const [_sessionUser, setSessionUser] = useState<Session['user'] | null>(null);

  const onChangeName = useCallback((value: string) => {
    setName(value);
  }, []);

  const onRadioSelect = useCallback((_value: boolean) => {
    onSelectSex(_value);
  }, []);

  useEffect(() => {
    (async () => {
      const session = await supabaseClient.auth.session()?.user;
      session && setSessionUser(session);
    })();
  }, []);

  return (
    <View style={style.container}>
      <Text style={style.title}>プロフィールを登録</Text>

      <Text style={style.label}>ユーザー名</Text>
      <TextInput value={name} onChangeText={onChangeName} />

      <Text style={style.label}>生年月日</Text>
      <DatePicker value={birthday} onChangeValue={onSetBirthday} />

      <Text style={style.label}>選択してください</Text>
      <View style={style.row}>
        {radio_group.map((radio) => (
          <BounceableView
            key={radio.id}
            bgTheme="bg1"
            bgStyle={[style.radioArea]}
            onPress={() => onRadioSelect(radio.active)}
          >
            <Radio value={radio.active} activeValue={sex} />
            <Text style={style.radioLabel}>{radio.label}</Text>
          </BounceableView>
        ))}
      </View>

      <Button
        label="登録する"
        textTheme="text0"
        bgTheme="primary"
        outlineStyle={style.buttonOutline}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: '6%',
  },
  title: {
    marginBottom: '6%',

    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
  label: {
    lineHeight: 30,
    paddingLeft: '1%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radioArea: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '46%',

    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,

    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: '#888888',
    shadowOpacity: 0.2,
    elevation: 1,
  },
  radioLabel: {
    marginLeft: '25%',
  },
  buttonOutline: {
    marginTop: '6%',
  },
});
