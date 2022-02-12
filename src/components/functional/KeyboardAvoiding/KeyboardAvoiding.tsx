import type { ReactNode, VFC } from "react";
import React from "react";
import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from "react-native";

import { SafeAreaView } from "~/components/ui/View";
import type { ViewProps } from "~/components/ui/View/View";
import { useThemeColor } from "~/hooks/useThemeColor";
import { viewStyles } from "~/styles";
import { onKeyBoardClose } from "~/utils/onKeyBoardClose";

type Props = ViewProps & {
  children: ReactNode;
};

export const KeyboardAvoiding: VFC<Props> = ({ children, style, lightBg, darkBg }) => {
  const backgroundColor = useThemeColor({ light: lightBg, dark: darkBg }, "bg1");

  return (
    <TouchableWithoutFeedback onPress={onKeyBoardClose}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={viewStyles.flex1}
      >
        <SafeAreaView style={[style, { backgroundColor }]}>{children}</SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
