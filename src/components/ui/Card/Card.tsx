import type { FC, ReactNode } from 'react';
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';

import { Bounceable, TouchableOpacity } from '~/components/ui/View';
import { useThemeColor } from '~/hooks/useThemeColor';
import type { StyleProps } from '~/types/style';

export type CardProps = StyleProps & {
  children: ReactNode;
  isBorder?: true;
  activeOpacity?: number;
  onPress?: () => void;
};

export const Card: FC<CardProps> = memo(
  ({
    // theme
    bg = 'bg1',
    lightBg,
    darkBg,
    // ViewProps
    isBorder,
    outlineStyle,
    // TouchableOpacityProps
    activeOpacity = 0.9,
    viewStyle,
    children,
    onPress,
  }) => {
    const borderColor = useThemeColor({}, isBorder ? 'border' : bg);

    return (
      <Bounceable viewStyle={[defaultStyle.bounceable_view, outlineStyle]} onPress={onPress}>
        <TouchableOpacity
          style={[
            defaultStyle.touchable_opacity_view,
            viewStyle,
            { borderWidth: isBorder && 1, borderColor },
          ]}
          {...{ lightBg, darkBg, bg, activeOpacity }}
        >
          {children}
        </TouchableOpacity>
      </Bounceable>
    );
  },
);

const defaultStyle = StyleSheet.create({
  bounceable_view: {
    marginBottom: '6%',
  },
  touchable_opacity_view: {
    borderRadius: 20,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: '#888888',
    shadowOpacity: 0.4,
    elevation: 1,
  },
});
