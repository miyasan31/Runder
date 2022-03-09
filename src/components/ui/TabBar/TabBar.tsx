/* eslint-disable react-native/no-inline-styles */
import type { FC } from 'react';
import { StyleSheet } from 'react-native';
import type { NavigationState, SceneRendererProps } from 'react-native-tab-view';
import { TabBar as DefaultTabBar } from 'react-native-tab-view';

import { Text } from '~/components/ui/Text';
import { useTheme } from '~/hooks/useTheme';

type Props = SceneRendererProps & {
  navigationState: NavigationState<{
    key: string;
    title: string;
  }>;
};

export const TabBar: FC<Props> = (props) => {
  const primary = useTheme({}, 'primary');
  const backgroundColor = useTheme({}, 'bg1');
  const borderBottomColor = useTheme({}, 'border1');

  return (
    <DefaultTabBar
      {...props}
      style={{
        maxHeight: 45,
        borderBottomWidth: 1,
        backgroundColor,
        borderBottomColor,
      }}
      indicatorStyle={{ backgroundColor: primary, marginBottom: -1 }}
      renderLabel={({ route, focused }) => (
        <Text style={style.tab_title} color={focused ? 'primary' : 'color2'}>
          {route.title}
        </Text>
      )}
    />
  );
};

const style = StyleSheet.create({
  tab_title: {
    fontSize: 16,
    fontWeight: '500',
  },
});
