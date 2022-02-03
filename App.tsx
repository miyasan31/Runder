import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RecoilRoot } from "recoil";

import { Toaster } from "~/components/Toaster";
import { useCachedResources } from "~/hooks/useCachedResources";
import { useColorScheme } from "~/hooks/useColorScheme";
import { Navigations } from "~/navigations";

const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <RecoilRoot>
        <SafeAreaProvider>
          <Navigations colorScheme={colorScheme} />
          <StatusBar />
          <Toaster position="bottom-center" />
        </SafeAreaProvider>
      </RecoilRoot>
    );
  }
};

// eslint-disable-next-line import/no-default-export
export default App;
