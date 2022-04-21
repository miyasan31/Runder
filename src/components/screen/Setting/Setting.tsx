import type { FC } from 'react';
import React, { useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';

import { ActionCheckModal } from '~/components/screen/Setting/ActionCheckModal';
import { IconButton } from '~/components/ui/Button';
import {
  ChevronRightIcon,
  ColorSwatchIcon,
  LockClosedIcon,
  MailIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '~/components/ui/Icon';
import { Text } from '~/components/ui/Text';
import { View } from '~/components/ui/View';
import { useSignOut } from '~/hooks/supabase';
import type { ProfileScreenProps } from '~/types';

import { SettingList } from './SettingList';

export type SettingScreenProps = ProfileScreenProps<'SettingScreen'>;

const LogoutButton: FC = () => {
  const { onSignOut } = useSignOut();
  const [isVisible, setIsVisible] = useState(false);
  const onModalVisible = useCallback(() => setIsVisible((prev) => !prev), []);

  return (
    <>
      <IconButton onPress={onModalVisible}>
        <Text color="error" style={{ fontWeight: '600', fontSize: 16 }}>
          ログアウト
        </Text>
      </IconButton>

      <ActionCheckModal
        isVisible={isVisible}
        onCloseModal={onModalVisible}
        onModalAction={onSignOut}
      />
    </>
  );
};

export const Setting: FC<SettingScreenProps> = ({ navigation }) => {
  const SETTING_LIST_DATA = [
    {
      id: 'theme',
      navigate: 'ThemeScreen',
      leftText: 'テーマ',
      leftComponent: <SparklesIcon />,
      rightComponent: <ChevronRightIcon icon="icon2" />,
      isDivider: true,
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
      leftText: 'バージョン',
      leftComponent: <ColorSwatchIcon />,
      rightText: '1.0.0',
      isDivider: true,
      onPress: null,
    },
    {
      id: 'sign_out',
      navigate: undefined,
      color: 'error',
      type: 'view',
      leftComponent: <LogoutButton />,
      onPress: null,
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
