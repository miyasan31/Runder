import { Feather } from '@expo/vector-icons';
import type { ComponentProps, VFC } from 'react';
import React, { memo } from 'react';

const BOTTOM_ICON = 28;

type Props = {
  name: ComponentProps<typeof Feather>['name'];
  color: string;
};

export const TabBarIcon: VFC<Props> = memo((props) => {
  return <Feather style={{ marginBottom: -3 }} size={BOTTOM_ICON} {...props} />;
});
