import React from "react";
import type { MarginModifiers } from "react-native-ui-lib";
import { Text, View } from "react-native-ui-lib";
import { Bounceable } from "rn-bounceable";

type ButtonProps = MarginModifiers & {
  label?: string;
  onPress?: () => void;
};

export const Button: React.FC<ButtonProps> = (props) => {
  const { label, onPress, ...modifiers } = props;

  return (
    <View {...modifiers}>
      <Bounceable onPress={onPress}>
        <View center bg-primary padding-s4 br100>
          <Text text65M whitish>
            {label}
          </Text>
        </View>
      </Bounceable>
    </View>
  );
};
