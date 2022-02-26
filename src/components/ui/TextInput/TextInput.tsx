import type { FC } from 'react';
import React, { memo } from 'react';
import { StyleSheet, TextInput as NativeTextInput } from 'react-native';

import { View } from '~/components/ui/View';
import { useThemeColor } from '~/hooks/useThemeColor';
import type { TextInputStyleProps } from '~/types/style';

export type TextInputProps = NativeTextInput['props'] &
  TextInputStyleProps & {
    isBorder?: true;
  };

export const TextInput: FC<TextInputProps> = memo(
  ({
    // 基本的に使用しない
    lightBg,
    darkBg,
    lightText: light,
    darkText: dark,
    // custom theme
    bg = 'bg4',
    color: fontColor = 'text1',
    // ViewProps
    isBorder,
    bgStyle,
    // TextInputProps
    style,
    textStyle,
    secureTextEntry = false,
    ...otherProps
  }) => {
    const color = useThemeColor({ light, dark }, fontColor);
    const borderColor = useThemeColor({}, isBorder ? 'border' : bg);

    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={[defaultStyle.bg, bgStyle, { borderWidth: 1, borderColor }]}
        {...{ lightBg, darkBg, bg }}
      >
        <NativeTextInput
          secureTextEntry={secureTextEntry}
          style={[defaultStyle.text, style, textStyle, { color }]}
          {...otherProps}
        />
      </View>
    );
  },
);

const defaultStyle = StyleSheet.create({
  bg: {
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
  text: {
    fontSize: 18,
  },
});
