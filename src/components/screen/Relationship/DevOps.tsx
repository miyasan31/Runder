import type { FC } from 'react';
import React, { useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useRecoilValue } from 'recoil';

import { Button } from '~/components/ui/Button';
import { Text } from '~/components/ui/Text';
import { TextInput } from '~/components/ui/TextInput';
import { View } from '~/components/ui/View';
import { sleep } from '~/functions/sleep';
import { user } from '~/stores/user';
import { layoutStyle } from '~/styles';
import { supabaseClient } from '~/utils/supabase';
import { toastKit } from '~/utils/toastKit';

import type { RelationshipScreenProps } from '.';

export const DevOps: FC<RelationshipScreenProps> = () => {
  const userInfo = useRecoilValue(user);
  const [text, setText] = useState('');

  const onChangeText = useCallback((value: string) => {
    setText(value.trim());
  }, []);

  const onSubmit = useCallback(async () => {
    if (!text) return;

    const { errorToast, successToast } = toastKit('送信しています');
    const insertSuggestionPromise = supabaseClient.from('suggestion').insert({
      user_id: userInfo.id,
      contents: text,
    });
    const sleepPromise = sleep(400);
    const [{ error }] = await Promise.all([insertSuggestionPromise, sleepPromise]);

    if (error) {
      errorToast('送信に失敗しました');
      return;
    }

    setText('');
    successToast('送信しました');
  }, [text]);

  return (
    <View style={layoutStyle.scene}>
      <Text style={style.message}>
        {`アプリについてご意見･ご要望を頂けますと幸いです。
「〇〇画面のを〇〇の機能をこうして欲しい」「こんな新機能が欲しい」など何でもお送りください。

開発の参考にさせていただきます。`}
      </Text>

      <TextInput
        multiline
        numberOfLines={6}
        value={text}
        onChangeText={onChangeText}
        placeholder="ここに入力してください"
        bg="bg1"
        viewStyle={style.input_text_view}
        textStyle={style.input_text}
      />

      <Button label="送信する" bg="primary" color="white" onPress={onSubmit} />
    </View>
  );
};

const style = StyleSheet.create({
  message: {
    lineHeight: 20,
  },
  input_text_view: {
    height: 200,
    paddingBottom: 6,
    marginVertical: '6%',
  },
  input_text: {
    fontSize: 16,
  },
});
