// components/SplashScreen.tsx
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface Props {
  onAnimationEnd: () => void;
}

const SplashScreen: React.FC<Props> = ({ onAnimationEnd }) => {
  const scale = useSharedValue(0.5);
  const opacity = useSharedValue(0);

  useEffect(() => {
    scale.value = withTiming(1, {
      duration: 1000,
      easing: Easing.out(Easing.exp),
    });

    opacity.value = withTiming(
      1,
      {
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
      },
      (finished: any) => {
        if (finished) {
          setTimeout(() => runOnJS(onAnimationEnd)(), 500);
        }
      },
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/splashLogo.png')} // Your logo path
        style={[styles.logo, animatedStyle]}
        resizeMode="contain"
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F50C1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
});
