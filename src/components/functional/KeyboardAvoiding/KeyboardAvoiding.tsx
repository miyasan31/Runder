import type { ReactNode, VFC } from "react";
import React from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, TouchableWithoutFeedback } from "react-native";

import { onKeyBoardClose } from "~/utils/onKeyBoardClose";

type Props = {
  children: ReactNode;
};

export const KeyboardAvoiding: VFC<Props> = (props) => {
  return (
    <TouchableWithoutFeedback onPress={onKeyBoardClose}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={defaultStyle.flex1}
      >
        {props.children}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const defaultStyle = StyleSheet.create({
  flex1: {
    flex: 1,
  },
});
