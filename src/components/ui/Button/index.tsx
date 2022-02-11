/* eslint-disable react-native/no-inline-styles */
import type { FC } from "react";
import React from "react";
import type { MarginModifiers } from "react-native-ui-lib";
import { Text, View } from "react-native-ui-lib";
import { Bounceable } from "rn-bounceable";

import type { BackgroundTheme, ColorTheme, TextTheme } from "~/utils/rnuilibConfig";
import { useThemeColor } from "~/utils/rnuilibConfig";

type ButtonProps = MarginModifiers & {
  label?: string;
  isBorder?: true;
  bgTheme?: BackgroundTheme | ColorTheme;
  textTheme?: TextTheme | ColorTheme;
  onPress?: () => void;
};

export const Button: FC<ButtonProps> = ({
  label,
  onPress,
  isBorder,
  bgTheme,
  textTheme,
  ...modifiers
}) => {
  const borderColor = useThemeColor({}, "border1");
  const backgroundColor = { [`bg-${bgTheme}`]: true };
  const color = { [`${textTheme}`]: true };

  return (
    <View {...modifiers} width="100%">
      <Bounceable onPress={onPress}>
        <View
          padding-s4 // padding:
          center // text-align: center
          br100 // border-radius: 100
          width="100%"
          style={{
            borderWidth: isBorder ? 1 : 0,
            borderColor,
          }}
          {...backgroundColor}
        >
          <Text text65M whitish {...color}>
            {label}
          </Text>
        </View>
      </Bounceable>
    </View>
  );
};
