/* eslint-disable react-native/no-inline-styles */
import type { FC } from 'react';
import { StyleSheet } from 'react-native';
import type { NavigationState, SceneRendererProps } from 'react-native-tab-view';
import { TabBar as DefaultTabBar } from 'react-native-tab-view';

import { Text } from '~/components/ui/Text';
import { useThemeColor } from '~/hooks/useThemeColor';

type Props = SceneRendererProps & {
  navigationState: NavigationState<{
    key: string;
    title: string;
  }>;
};

export const TabBar: FC<Props> = (props) => {
  const border = useThemeColor({}, 'border');
  const primary = useThemeColor({}, 'primary');
  const backgroundColor = useThemeColor({}, 'bg0');

  return (
    <DefaultTabBar
      {...props}
      style={{
        backgroundColor,
        borderBottomWidth: 1,
        borderBottomColor: border,
        maxHeight: 45,
      }}
      indicatorStyle={{ backgroundColor: primary, marginBottom: -1 }}
      renderLabel={({ route, focused }) => (
        <Text style={style.text} color={focused ? 'primary' : 'text2'}>
          {route.title}
        </Text>
      )}
    />
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: '500',
  },
});
