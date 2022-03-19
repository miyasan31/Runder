import type { FC } from 'react';
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';

import { Text } from './Text';

type Props = {
  label: string;
  error?: string;
};

export const ExceptionText: FC<Props> = memo(({ label, error }) => {
  return (
    <>
      <Text style={style.label}>{label}</Text>
      {error ? <Text style={style.error}>{error}</Text> : null}
    </>
  );
});

const style = StyleSheet.create({
  label: {
    padding: '4%',
    fontSize: 16,
    lineHeight: 22,
  },
  error: {
    paddingHorizontal: '4%',
    lineHeight: 20,
  },
});
