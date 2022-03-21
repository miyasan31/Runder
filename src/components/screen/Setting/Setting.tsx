import type { FC } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';

import { SettingList } from '~/components/screen/Setting/SettingList';
import {
  ChevronRightIcon,
  ColorSwatchIcon,
  LockClosedIcon,
  MailIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '~/components/ui/Icon';
import { View } from '~/components/ui/View';
import type { ProfileScreenProps } from '~/types';
import { onSignOut } from '~/utils/supabase';

export type SettingScreenProps = ProfileScreenProps<'SettingScreen'>;

const SETTING_LIST_DATA = [
  {
    id: 'theme',
    navigate: 'ThemeScreen',
    leftText: 'テーマ',
    leftComponent: <SparklesIcon />,
    rightComponent: <ChevronRightIcon icon="icon2" />,
    onPress: null,
  },
  {
    id: 'privacy',
    navigate: 'PrivacyScreen',
    leftText: 'プライバシーポリシー',
    leftComponent: <LockClosedIcon />,
    rightComponent: <ChevronRightIcon icon="icon2" />,
    onPress: null,
  },
  {
    id: 'terms',
    navigate: 'TermsScreen',
    leftText: '利用規約',
    leftComponent: <ShieldCheckIcon />,
    rightComponent: <ChevronRightIcon icon="icon2" />,
    onPress: null,
  },
  {
    id: 'contact',
    navigate: 'ContactScreen',
    leftText: 'お問い合わせ',
    leftComponent: <MailIcon />,
    rightComponent: <ChevronRightIcon icon="icon2" />,
    onPress: null,
  },
  {
    id: 'version',
    navigate: undefined,
    leftText: 'アプリバージョン',
    leftComponent: <ColorSwatchIcon />,
    rightText: '1.0.0',
    isDivider: true,
    onPress: null,
  },
  {
    id: 'sign_out',
    navigate: undefined,
    leftText: 'サインアウト',
    color: 'error',
    onPress: () => onSignOut(),
  },
  {
    id: 'account_delete',
    navigate: 'AccountDeletionScreen',
    leftText: 'アカウント削除',
    rightComponent: <ChevronRightIcon icon="icon2" />,
    color: 'error',
    onPress: null,
  },
] as const;

export const Setting: FC<SettingScreenProps> = ({ navigation }) => {
  return (
    <View style={style.root}>
      {SETTING_LIST_DATA.map((item: typeof SETTING_LIST_DATA[number]) => {
        const onPress = item.onPress
          ? item.onPress
          : () => (item.navigate ? navigation.navigate(item.navigate) : null);
        return <SettingList key={item.id} {...item} onPress={onPress} />;
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
