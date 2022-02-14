/* eslint-disable react-native/no-inline-styles */
import { StyleSheet } from 'react-native';
import type { NavigationState, SceneRendererProps } from 'react-native-tab-view';
import { TabBar as DefaultTabBar } from 'react-native-tab-view';

import { Text } from '~/components/ui/Text';
import { useThemeColor } from '~/hooks/useThemeColor';

export const TabBar = (
  props: SceneRendererProps & {
    navigationState: NavigationState<{
      key: string;
      title: string;
    }>;
  },
) => {
  const border = useThemeColor({}, 'border');
  const primary = useThemeColor({}, 'primary');
  const backgroundColor = useThemeColor({}, 'bg1');

  return (
    <DefaultTabBar
      {...props}
      style={{
        backgroundColor,
        borderBottomWidth: 1,
        borderBottomColor: border,
      }}
      indicatorStyle={{ backgroundColor: primary, marginBottom: -1 }}
      renderLabel={({ route, focused }) => (
        <Text style={style.text} textTheme={focused ? 'primary' : 'text2'}>
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
