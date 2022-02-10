import type { FC } from "react";
import React from "react";
import type { MarginModifiers } from "react-native-ui-lib";
import { Text, View } from "react-native-ui-lib";
import { Bounceable } from "rn-bounceable";

import type { BackgroundTheme, ColorTheme, TextTheme } from "~/utils/rnuilibConfig";
import { useThemeColor } from "~/utils/rnuilibConfig";

type ButtonProps = MarginModifiers & {
  label?: string;
  onPress?: () => void;
  isBorder?: true;
  bgTheme?: BackgroundTheme | ColorTheme;
  textTheme?: TextTheme | ColorTheme;
};

export const Button: FC<ButtonProps> = (props) => {
  const { label, onPress, isBorder, bgTheme, textTheme, ...modifiers } = props;
  const borderColor = useThemeColor({}, "31");
  const backgroundColor = { [`bg-${bgTheme}`]: true };
  const color = { [`${textTheme}`]: true };

  return (
    <View {...modifiers} border-width={1} border-color={borderColor}>
      <Bounceable onPress={onPress}>
        <View
          padding-s4
          center // text-align: center
          br100 // border-radius: 100
          border-width={isBorder ? 1 : 0}
          border-color={isBorder ? borderColor : ""}
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
