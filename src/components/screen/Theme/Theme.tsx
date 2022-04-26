import type { FC } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useRecoilState } from 'recoil';

import { SettingList } from '~/components/screen/Setting/SettingList';
import { Radio } from '~/components/ui/Radio';
import { View } from '~/components/ui/View';
import { THEME_KEY } from '~/constants/ENV';
import { theme } from '~/stores/theme';
import type { ProfileScreenProps } from '~/types';
import { deleteSecureStore, saveSecureStore } from '~/utils/secureStore';

export type SettingScreenProps = ProfileScreenProps<'SettingScreen'>;

export const Theme: FC<SettingScreenProps> = () => {
  const [themeInfo, setThemeInfo] = useRecoilState(theme);

  const THEME_LIST_DATA = [
    {
      id: 'os',
      leftText: '端末の設定に合わせる',
      rightComponent: <Radio activeValue={themeInfo} value={null} />,
      onPress: async () => {
        await deleteSecureStore(THEME_KEY);
        setThemeInfo(null);
      },
    },
    {
      id: 'light',
      leftText: 'ライトモード',
      rightComponent: <Radio activeValue={themeInfo} value="light" />,
      onPress: async () => {
        await saveSecureStore(THEME_KEY, 'light');
        setThemeInfo('light');
      },
    },
    {
      id: 'dark',
      leftText: 'ダークモード',
      rightComponent: <Radio activeValue={themeInfo} value="dark" />,
      onPress: async () => {
        await saveSecureStore(THEME_KEY, 'dark');
        setThemeInfo('dark');
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
