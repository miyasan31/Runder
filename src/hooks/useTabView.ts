import { useCallback, useState } from 'react';
import { useWindowDimensions } from 'react-native';

export const useTabView = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const onIndexChange = useCallback((i: number) => setIndex(i), []);

  return { layout, index, onIndexChange };
};
