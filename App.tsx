import { StatusBar } from 'expo-status-bar';
import React, { memo } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RecoilRoot } from 'recoil';

import { Toaster } from '~/components/ui/Toaster';
import { useCachedResources } from '~/hooks/useCachedResources';
import { useColorScheme } from '~/hooks/useColorScheme';
import { Navigation } from '~/screens';

const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete || !colorScheme) return null;
  return (
    <RecoilRoot>
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
      <Toaster position="bottom-center" />
    </RecoilRoot>
  );
};

// eslint-disable-next-line import/no-default-export
export default memo(App);
