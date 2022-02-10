import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RecoilRoot } from "recoil";

import { Toaster } from "~/components/ui/Toaster";
import { useCachedResources } from "~/hooks/useCachedResources";
import { useColorScheme } from "~/hooks/useColorScheme";
import { Navigations } from "~/screens";
import { styleThemeConfig, themeUtils } from "~/utils/rnuilibConfig";

const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  styleThemeConfig();
  themeUtils();

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
