import { StatusBar } from 'expo-status-bar';
import React, { memo } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RecoilRoot } from 'recoil';

import { Toaster } from '~/components/ui/Toaster';
import { View } from '~/components/ui/View';
import { useCachedResources } from '~/hooks/useCachedResources';
import { useColorScheme } from '~/hooks/useColorScheme';
import { Navigations } from '~/screens';
import { viewStyles } from '~/styles';

const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) return null;
  return (
    <RecoilRoot>
      <SafeAreaProvider>
        <View style={viewStyles.flex1} bgTheme="bg1">
          <Navigations colorScheme={colorScheme} />
          <StatusBar />
        </View>
      </SafeAreaProvider>
      <Toaster position="bottom-center" />
    </RecoilRoot>
  );
};

// eslint-disable-next-line import/no-default-export
export default memo(App);
