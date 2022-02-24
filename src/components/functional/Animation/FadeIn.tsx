import type { ReactNode, VFC } from 'react';
import { useEffect, useRef } from 'react';
import type { StyleProp, ViewProps } from 'react-native';
import { Animated } from 'react-native';

type Props = {
  children: ReactNode;
  style?: StyleProp<ViewProps>;
  duration?: number;
};

export const FadeIn: VFC<Props> = ({ style, children, duration = 1000 }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, duration]);

  return <Animated.View style={[style, { opacity: fadeAnim }]}>{children}</Animated.View>;
};
