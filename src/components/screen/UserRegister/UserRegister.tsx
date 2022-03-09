import type { Session } from '@supabase/supabase-js';
import type { FC } from 'react';
import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast/src/core/toast';
import { StyleSheet } from 'react-native';

import type { UserRegisterScreenProps } from '~/components/screen/UserRegister';
import { Button } from '~/components/ui/Button';
import { DatePicker } from '~/components/ui/DatePicker';
import { Radio } from '~/components/ui/Radio';
import { Text } from '~/components/ui/Text';
import { TextInput } from '~/components/ui/TextInput';
import { Bounceable, View } from '~/components/ui/View';
import { sleep } from '~/functions/sleep';
import { updateSession } from '~/stores/session';
import { supabaseClient } from '~/utils/supabase';
import { toastKit } from '~/utils/toastKit';

const radio_group = [
  { active: 1, label: '男性' },
  { active: 2, label: '女性' },
];

export const UserRegister: FC<UserRegisterScreenProps> = () => {
  const [name, setName] = useState('');
  const [birthday, onSetBirthday] = useState<Date | null>(null);
  const [sex, onSelectSex] = useState<number | null>(null);
  const [sessionUser, setSessionUser] = useState<Session['user'] | null>(null);

  const onChangeName = useCallback((value: string) => {
    setName(value.trim());
  }, []);

  const onRadioSelect = useCallback((_value: number) => {
    onSelectSex(_value);
  }, []);

  const onRegisterUserInfo = useCallback(async () => {
    if (!sessionUser) return;

    if (!name) {
      toast.error('ユーザー名を入力してください', { icon: '🧐' });
      return;
    }

    if (!birthday) {
      toast.error('生年月日を入力してください', { icon: '🧐' });
      return;
    }

    if (!sex) {
      toast.error('性別を選択してください', { icon: '🧐' });
      return;
    }

    const { errorToast, successToast } = toastKit('プロフィールを登録してます...');

    const createUser = {
      id: sessionUser.id,
      name,
      sex,
      birthday,
      email: sessionUser.email,
      avatar: sessionUser.user_metadata.avatar_url || null,
      created_at: new Date(),
    };

    const createUserPromise = supabaseClient.from('user').insert(createUser);
    const sleepPromise = sleep(1000);
    const [{ error }] = await Promise.all([createUserPromise, sleepPromise]);

    if (error) {
      errorToast('プロフィール登録に失敗しました');
      return;
    }

    successToast('プロフィール登録に成功しました');
    updateSession(true);
  }, [sessionUser, name, sex, birthday]);

  useEffect(() => {
    (async () => {
      const session = await supabaseClient.auth.session()?.user;
      if (!session) {
        return toast.error('ユーザー情報が取得できませんでした', { icon: '😱' });
      }
      setSessionUser(session);

      if (session?.app_metadata.provider === 'google') {
        setName(session.user_metadata.name);
      }
    })();
  }, []);

  return (
    <>
      <Text style={style.screen_title}>プロフィールを登録</Text>

      <Text style={style.from_label}>ユーザー名</Text>
      <TextInput value={name} onChangeText={onChangeName} />

      <Text style={style.from_label}>生年月日</Text>
      <DatePicker value={birthday} onChangeValue={onSetBirthday} />

      <Text style={style.from_label}>選択してください</Text>
      <View style={style.align_horizontal}>
        {radio_group.map((radio) => (
          <Bounceable
            key={radio.active}
            bg="bg1"
            viewStyle={[style.bounceable_view]}
            onPress={() => onRadioSelect(radio.active)}
          >
            <Radio value={radio.active} activeValue={sex} />
            <Text style={style.radio_label}>{radio.label}</Text>
          </Bounceable>
        ))}
      </View>

      <Button
        label="登録する"
        color="color0"
        bg="primary"
        outlineStyle={style.button_outline}
        onPress={onRegisterUserInfo}
      />
    </>
  );
};

const style = StyleSheet.create({
  screen_title: {
    marginBottom: '6%',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
  from_label: {
    lineHeight: 30,
    paddingLeft: '1%',
  },
  align_horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bounceable_view: {
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
    shadowOpacity: 0.2,
    elevation: 1,
  },
  radio_label: {
    marginLeft: '25%',
  },
  button_outline: {
    marginTop: '6%',
  },
});
