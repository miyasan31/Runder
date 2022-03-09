import { StatusBar } from 'expo-status-bar';
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RecoilRoot } from 'recoil';

import { Toaster } from '~/components/ui/Toaster';
import { View } from '~/components/ui/View';
import { useCachedResources } from '~/hooks/useCachedResources';
import { useColorScheme } from '~/hooks/useColorScheme';
import { Navigation } from '~/screens';

const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) return null;
  return (
    <RecoilRoot>
      <SafeAreaProvider>
        <View style={style.root} bg="bg1">
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </View>
      </SafeAreaProvider>
      <Toaster position="bottom-center" />
    </RecoilRoot>
  );
};

// eslint-disable-next-line import/no-default-export
export default memo(App);

export const style = StyleSheet.create({
  root: {
    flex: 1,
  },
});
