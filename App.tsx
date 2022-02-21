import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RecoilRoot } from 'recoil';

import { Toaster } from '~/components/ui/Toaster';
import { Navigations } from '~/screens';

const App = () => {
  return (
    <RecoilRoot>
      <SafeAreaProvider>
        <Navigations />
        <StatusBar />
      </SafeAreaProvider>
      <Toaster position="bottom-center" />
    </RecoilRoot>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
