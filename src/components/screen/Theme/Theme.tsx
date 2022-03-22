import type { FC } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useSnapshot } from 'valtio';

import { SettingList } from '~/components/screen/Setting/SettingList';
import { Radio } from '~/components/ui/Radio';
import { View } from '~/components/ui/View';
import { customTheme, updateTheme } from '~/stores/theme';
import type { ProfileScreenProps } from '~/types';
import { saveSecureStore } from '~/utils/secureStore';

const theme_key = 'runder_theme_vfauih87o3hrilbafla';

export type SettingScreenProps = ProfileScreenProps<'SettingScreen'>;

export const Theme: FC<SettingScreenProps> = () => {
  const THEME = useSnapshot(customTheme);

  const THEME_LIST_DATA = [
    {
      id: 'light',
      leftText: 'ライトモード',
      rightComponent: <Radio activeValue={THEME.theme} value="light" />,
      onPress: async () => {
        updateTheme('light');
        await saveSecureStore(theme_key, 'light');
      },
    },
    {
      id: 'dark',
      leftText: 'ダークモード',
      rightComponent: <Radio activeValue={THEME.theme} value="dark" />,
      onPress: async () => {
        updateTheme('dark');
        await saveSecureStore(theme_key, 'dark');
      },
    },
  ] as const;

  return (
    <View style={style.root}>
      {THEME_LIST_DATA.map((item: typeof THEME_LIST_DATA[number]) => {
        return <SettingList key={item.id} {...item} />;
      })}
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: '4%',
  },
});
