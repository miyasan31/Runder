import type { VFC } from 'react';
import React, { useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';

import type { UserRegisterScreenProps } from '~/components/screen/UserRegister';
import { Button } from '~/components/ui/Button';
import { Radio } from '~/components/ui/Radio';
import { Text } from '~/components/ui/Text';
import { TextInput } from '~/components/ui/TextInput';
import { TouchableOpacity, View } from '~/components/ui/View';

const radio_group = [
  { id: 1, active: true, label: '男性' },
  { id: 2, active: false, label: '女性' },
];

export const UserRegister: VFC<UserRegisterScreenProps> = () => {
  const [value, onSetValue] = useState<boolean | null>(null);

  const onRadioSelect = useCallback((_value: boolean) => {
    onSetValue(_value);
  }, []);

  return (
    <View style={style.container}>
      <Text style={style.title}>プロフィールを登録</Text>

      <Text style={style.label}>ユーザー名</Text>
      <TextInput />

      <Text style={style.label}>生年月日</Text>
      <TextInput />

      <Text style={style.label}>選択してください</Text>
      <View style={style.row}>
        {radio_group.map((radio) => (
          <TouchableOpacity
            key={radio.id}
            style={style.radioArea}
            bgTheme="bg1"
            activeOpacity={1}
            onPress={() => onRadioSelect(radio.active)}
          >
            <Radio value={value} activeValue={radio.active} onChangeValue={onSetValue} />
            <Text style={style.radioLabel}>{radio.label}</Text>
          </TouchableOpacity>
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
