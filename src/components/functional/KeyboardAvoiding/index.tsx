import type { ReactNode, VFC } from "react";
import React from "react";
import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from "react-native";

import type { SafeAreaViewProps } from "~/components/ui/SafeAreaView";
import { SafeAreaView } from "~/components/ui/SafeAreaView";
import { useThemeColor } from "~/hooks/useThemeColor";
import { viewStyles } from "~/styles";
import { onKeyBoardClose } from "~/utils/onKeyBoardClose";

type Props = SafeAreaViewProps & {
  children: ReactNode;
};

export const KeyboardAvoiding: VFC<Props> = (props) => {
  const { children, style, lightBgColor, darkBgColor } = props;

  const backgroundColor = useThemeColor({ light: lightBgColor, dark: darkBgColor }, "bg1");

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
