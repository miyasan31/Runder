import { useCallback, useState } from 'react';
import { useWindowDimensions } from 'react-native';

export const useTabView = (activeTabIndex = 0) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(activeTabIndex);
  const onIndexChange = useCallback((i: number) => setIndex(i), []);

  return { layout, index, onIndexChange };
};
