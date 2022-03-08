import type { FC, ReactNode } from 'react';
import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import { onKeyBoardClose } from '~/utils/onKeyBoardClose';

type Props = {
  children: ReactNode;
};

export const KeyboardAvoiding: FC<Props> = (props) => {
  return (
    <TouchableWithoutFeedback onPress={onKeyBoardClose}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={defaultStyle.flex_1}
      >
        {props.children}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const defaultStyle = StyleSheet.create({
  flex_1: {
    flex: 1,
  },
});
