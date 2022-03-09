import type { FC } from 'react';
import React, { memo } from 'react';
import { StyleSheet, TextInput as NativeTextInput } from 'react-native';

import { View } from '~/components/ui/View';
import { useTheme } from '~/hooks/useTheme';
import type { TextInputStyleProps } from '~/types/style';

export type TextInputProps = Omit<NativeTextInput['props'], 'style'> & TextInputStyleProps;

export const TextInput: FC<TextInputProps> = memo(
  ({
    // theme
    bg = 'bg4',
    lightBg,
    darkBg,
    color: fontColor = 'color1',
    lightColor,
    darkColor,
    border = 'border1',
    lightBorder,
    darkBorder,
    shadow = 'shadow',
    lightShadow,
    darkShadow,
    // ViewProps
    viewStyle,
    // TextInputProps
    textStyle,
    secureTextEntry = false,
    ...otherProps
  }) => {
    const color = useTheme({ light: lightColor, dark: darkColor }, fontColor);

    return (
      <View
        style={[defaultStyle.view, viewStyle]}
        {...{
          bg,
          lightBg,
          darkBg,
          border,
          lightBorder,
          darkBorder,
          shadow,
          lightShadow,
          darkShadow,
        }}
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
    shadowOpacity: 0.2,
    elevation: 1,
  },
  text_input: {
    fontSize: 18,
  },
});
