import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { FC } from 'react';
import React from 'react';

import { PrevButton } from '~/components/ui/Button';
import { Text } from '~/components/ui/Text';
import { useTheme } from '~/hooks/useTheme';
import type { ResultStackParamList } from '~/types';

import { ResultScreen } from './result.screen';
import { ResultDetailScreen } from './result_detail.screen';

const HeaderTitle: FC<{ title: string }> = ({ title }) => (
  // eslint-disable-next-line react-native/no-inline-styles
  <Text style={{ fontSize: 22, fontWeight: '600' }}>{title}</Text>
);

const Result = createNativeStackNavigator<ResultStackParamList>();

export const ResultNavigator: FC = () => {
  const backgroundColor = useTheme({}, 'bg1');

  return (
    <Result.Navigator
      initialRouteName="ResultScreen"
      screenOptions={{
        headerTitleAlign: 'left',
        headerShadowVisible: false,
        headerStyle: { backgroundColor },
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: '600',
        },
      }}
    >
      <Result.Screen
        name="ResultScreen"
        component={ResultScreen}
        options={() => ({
          title: '',
          headerLayoutPreset: 'left',
          headerLeft: () => <HeaderTitle title="大会の結果一覧" />,
        })}
      />
      <Result.Screen
        name="ResultDetailScreen"
        component={ResultDetailScreen}
        options={({ navigation }) => ({
          title: '大会の結果',
          headerTitleAlign: 'left',
          headerBackTitleVisible: false,
          headerLeft: () => {
            const onPrevScreen = () => navigation.goBack();
            return <PrevButton onPress={onPrevScreen} />;
          },
        })}
      />
    </Result.Navigator>
  );
};
