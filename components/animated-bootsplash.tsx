// src/components/AnimatedBootSplash.tsx
import React from 'react';
import { Animated } from 'react-native';
import BootSplash from 'react-native-bootsplash';

const AnimatedBootSplash = ({
  onAnimationEnd,
}: {
  onAnimationEnd: () => void;
}) => {
  const opacity = new Animated.Value(1);
  const scale = new Animated.Value(1);

  const { container, logo } = BootSplash.useHideAnimation({
    manifest: require('../assets/bootsplash/manifest.json'),
    logo: require('../assets/bootsplash/logo.png'),

    animate: () => {
      Animated.parallel([
        Animated.timing(opacity, {
          useNativeDriver: true,
          toValue: 0,
          duration: 600,
        }),
        Animated.timing(scale, {
          useNativeDriver: true,
          toValue: 1.4,
          duration: 600,
        }),
      ]).start(() => {
        onAnimationEnd();
      });
    },
  });

  return (
    <Animated.View {...container} style={[container.style, { opacity }]}>
      <Animated.Image
        {...logo}
        style={[logo.style, { transform: [{ scale }] }]}
        resizeMode="contain"
      />
    </Animated.View>
  );
};

export default AnimatedBootSplash;
