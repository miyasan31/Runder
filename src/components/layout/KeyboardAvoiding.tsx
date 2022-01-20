import type { ReactNode, VFC } from "react";
import React from "react";
import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from "react-native";
import { onKeyBoardClose } from "src/functions";
import { viewStyles } from "src/styles";

type Props = {
  children: ReactNode;
};

export const KeyboardAvoiding: VFC<Props> = (props) => {
  return (
    <TouchableWithoutFeedback onPress={onKeyBoardClose}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={viewStyles.flex1}
      >
        {props.children}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
