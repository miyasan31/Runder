import type { FC } from 'react';
import React, { memo } from 'react';
import { StyleSheet, TextInput as NativeTextInput } from 'react-native';

import { View } from '~/components/ui/View';
import { useThemeColor } from '~/hooks/useThemeColor';
import type { TextInputStyleProps } from '~/types/style';

export type TextInputProps = Omit<NativeTextInput['props'], 'style'> &
  TextInputStyleProps & {
    isBorder?: true;
  };

export const TextInput: FC<TextInputProps> = memo(
  ({
    // theme
    bg = 'bg4',
    lightBg,
    darkBg,
    color: fontColor = 'color1',
    lightColor: light,
    darkColor: dark,
    // ViewProps
    viewStyle,
    isBorder,
    // TextInputProps
    textStyle,
    secureTextEntry = false,
    ...otherProps
  }) => {
    const color = useThemeColor({ light, dark }, fontColor);
    const borderColor = useThemeColor({}, isBorder ? 'border' : bg);

    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={[defaultStyle.view, viewStyle, { borderWidth: 1, borderColor }]}
        {...{ lightBg, darkBg, bg }}
      >
        <NativeTextInput
          {...otherProps}
          secureTextEntry={secureTextEntry}
          style={[defaultStyle.text_input, textStyle, { color }]}
        />
      </View>
    );
  },
);

const defaultStyle = StyleSheet.create({
  view: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,

    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: '#888888',
    shadowOpacity: 0.2,
    elevation: 1,
  },
  text_input: {
    fontSize: 18,
  },
});
