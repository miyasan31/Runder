import type { VFC } from "react";
import React, { memo } from "react";
import { Button as NativeButton } from "react-native";
import { useThemeColor } from "src/hooks";
import type { StyleProps } from "types/style";

export type ButtonProps = StyleProps & NativeButton["props"];

export const CustomButton: VFC<ButtonProps> = memo((props) => {
  const {
    lightTextColor,
    darkTextColor,
    title,
    onPress,
    disabled,
    testID,
    accessibilityLabel,
    ...otherProps
  } = props;

  const textColor = useThemeColor({ light: lightTextColor, dark: darkTextColor }, "text1");

  return (
    <NativeButton
      title={title}
      color={textColor}
      onPress={onPress}
      disabled={disabled}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      {...otherProps}
    />
  );
});
