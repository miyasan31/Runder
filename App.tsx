import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RecoilRoot } from "recoil";

import { Toaster } from "~/components/ui/Toaster";
import { useCachedResources } from "~/hooks/useCachedResources";
import { useColorScheme } from "~/hooks/useColorScheme";
import { Navigations } from "~/screens";

const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [ready, setReady] = useState(false);

  const startApp = useCallback(async () => {
    setReady(true);
  }, []);

  useEffect(() => {
    startApp();
  }, [startApp]);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <RecoilRoot>
          {ready ? (
            <SafeAreaProvider>
              <Navigations colorScheme={colorScheme} />
              <StatusBar />
              <Toaster position="bottom-center" />
            </SafeAreaProvider>
          ) : null}
        </RecoilRoot>
      </GestureHandlerRootView>
    );
  }
};

// eslint-disable-next-line import/no-default-export
export default App;
