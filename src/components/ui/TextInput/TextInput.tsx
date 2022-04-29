/* eslint-disable react-native/no-inline-styles */
import type { FC } from 'react';
import React, { memo, useCallback, useRef, useState } from 'react';
import { StyleSheet, TextInput as NativeTextInput } from 'react-native';

import { TouchableOpacity } from '~/components/ui/View';
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
    shadow = 'shadow1',
    lightShadow,
    darkShadow,
    // ViewProps
    viewStyle,
    // TextInputProps
    textStyle,
    secureTextEntry = false,
    ...otherProps
  }) => {
    const primary = useTheme({}, 'primary');
    const color = useTheme({ light: lightColor, dark: darkColor }, fontColor);
    const placeholder = useTheme({}, 'color3');

    const inputRef = useRef<NativeTextInput>(null);

    const [isFocused, setIsFocused] = useState(false);
    const onFocus = useCallback(() => {
      setIsFocused(true);
      inputRef.current?.focus();
    }, []);
    const onBlur = useCallback(() => setIsFocused(false), []);

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={[
          defaultStyle.view,
          viewStyle,
          isFocused && {
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 1,
            elevation: 1,
          },
        ]}
        border={isFocused ? 'primary' : border}
        shadow={isFocused ? 'primary' : shadow}
        {...{
          bg,
          lightBg,
          darkBg,
          lightBorder,
          darkBorder,
          lightShadow,
          darkShadow,
        }}
        onPressOut={onFocus}
      >
        <NativeTextInput
          {...otherProps}
          ref={inputRef}
          secureTextEntry={secureTextEntry}
          selectionColor={primary}
          style={[defaultStyle.text_input, textStyle, { color }]}
          onPressOut={onFocus}
          onBlur={onBlur}
          placeholderTextColor={placeholder}
        />
      </TouchableOpacity>
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
    textAlignVertical: 'top',
  },
});
