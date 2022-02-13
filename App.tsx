import { StatusBar } from "expo-status-bar";
import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RecoilRoot } from "recoil";

import { Toaster } from "~/components/ui/Toaster";
import { useCachedResources } from "~/hooks/useCachedResources";
import { useColorScheme } from "~/hooks/useColorScheme";
import { Navigations } from "~/screens";
import { onKeyBoardClose } from "~/utils/onKeyBoardClose";

const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <RecoilRoot>
        <TouchableWithoutFeedback onPress={onKeyBoardClose}>
          <SafeAreaProvider>
            <Navigations colorScheme={colorScheme} />
            <StatusBar />
            <Toaster position="bottom-center" />
          </SafeAreaProvider>
        </TouchableWithoutFeedback>
      </RecoilRoot>
    );
  }
};

// eslint-disable-next-line import/no-default-export
export default App;
