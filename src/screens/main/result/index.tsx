import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { FC } from 'react';
import React from 'react';

import { PrevButton } from '~/components/ui/Button';
import type { ResultStackParamList } from '~/types';

import { ResultScreen } from './result.screen';
import { ResultDetailScreen } from './result_detail.screen';

const Result = createNativeStackNavigator<ResultStackParamList>();

export const ResultNavigator: FC = () => {
  return (
    <Result.Navigator initialRouteName="ResultScreen">
      <Result.Screen
        name="ResultScreen"
        component={ResultScreen}
        options={() => ({
          // headerShown: false,
        })}
      />
      <Result.Screen
        name="ResultDetailScreen"
        component={ResultDetailScreen}
        options={({ navigation }) => ({
          title: '大会の結果',
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontWeight: '600',
          },
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
