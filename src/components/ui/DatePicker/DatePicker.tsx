import { format } from 'date-fns';
import type { Dispatch, FC, SetStateAction } from 'react';
import React, { useCallback, useMemo, useState } from 'react';
import { StyleSheet } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { Text } from '~/components/ui/Text';
import { Bounceable } from '~/components/ui/View';
import type { TextInputStyleProps } from '~/types/style';

export type TextInputProps = TextInputStyleProps & {
  value: Date | null;
  onChangeValue: Dispatch<SetStateAction<Date | null>>;
};

export const DatePicker: FC<TextInputProps> = ({
  // theme
  bg = 'bg4',
  lightBg,
  darkBg,
  color = 'color1',
  lightColor,
  darkColor,
  border = 'border',
  lightBorder,
  darkBorder,
  shadow = 'shadow',
  lightShadow,
  darkShadow,
  // ViewProps
  viewStyle,
  // TextInputProps
  textStyle,
  // props,
  value,
  onChangeValue,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const onToggleDatePicker = useCallback(() => {
    setIsVisible((prev) => !prev);
  }, []);

  const onConfirm = useCallback((date: Date) => {
    onChangeValue(date);
    onToggleDatePicker();
  }, []);

  const date = useMemo(() => {
    return value ? format(new Date(value || ''), 'yyyy年M月d日') : '';
  }, [value]);

  return (
    <>
      <Bounceable
        viewStyle={[defaultStyle.view, viewStyle]}
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
        onPress={onToggleDatePicker}
        activeScale={0.97}
      >
        <Text style={[defaultStyle.text, textStyle]} {...{ lightColor, darkColor, color }}>
          {date}
        </Text>
      </Bounceable>

      <DateTimePickerModal
        isVisible={isVisible}
        mode="date"
        locale="ja"
        date={new Date(2000, 0, 1)}
        maximumDate={new Date()}
        minimumDate={new Date(1920, 12, 31)}
        confirmTextIOS="確定"
        cancelTextIOS="キャンセル"
        onConfirm={onConfirm}
        onCancel={onToggleDatePicker}
      />
    </>
  );
};

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
  text: {
    fontSize: 18,
    minHeight: 22,
  },
});
