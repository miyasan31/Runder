import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RecoilRoot } from "recoil";
import { Toaster } from "src/components/Toaster";
import { getFetcher } from "src/functions/fetcher";
import { useCachedResources } from "src/hooks/useCachedResources";
import { useColorScheme } from "src/hooks/useColorScheme";
import { Navigations } from "src/navigations";
import { SWRConfig } from "swr";

const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SWRConfig
        value={{
          fetcher: getFetcher,
        }}
      >
        <RecoilRoot>
          <SafeAreaProvider>
            <Navigations colorScheme={colorScheme} />
            <StatusBar />
            <Toaster position="bottom-center" />
          </SafeAreaProvider>
        </RecoilRoot>
      </SWRConfig>
    );
  }
};

// eslint-disable-next-line import/no-default-export
export default App;
