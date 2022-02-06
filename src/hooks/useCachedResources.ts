import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";

export const useCachedResources = () => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  const loadResourcesAndDataAsync = useCallback(async () => {
    try {
      SplashScreen.preventAutoHideAsync();
      // Load fonts
      await Font.loadAsync({
        ...FontAwesome.font,
        "space-mono": require("assets/fonts/SpaceMono-Regular.ttf"),
      });
    } catch (e) {
      console.warn(e);
    } finally {
      setLoadingComplete(true);
      SplashScreen.hideAsync();
    }
  }, []);

  useEffect(() => {
    loadResourcesAndDataAsync();
  }, [loadResourcesAndDataAsync]);

  return isLoadingComplete;
};
