// App.js
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import LandingScreen from './screens/landing';
import LoginScreen from './screens/login';

import { View } from 'react-native';
import AnimatedBootSplash from './components/animated-bootsplash';
import MainTabs from './screens/tabs/main-tabs';
const Stack = createNativeStackNavigator();

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  // useEffect(() => {
  //   RNBootSplash.hide({ fade: true });
  // }, []);

  // if (showSplash) {
  //   return <SplashScreen onAnimationEnd={() => setShowSplash(false)} />;
  // }

  return (
    <View style={{ flex: 1 }}>
      {showSplash && (
        <AnimatedBootSplash
          onAnimationEnd={() => {
            setShowSplash(false);
          }}
        />
      )}
      {!showSplash && (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Landing"
          >
            <Stack.Screen name="Landing" component={LandingScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={MainTabs} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </View>
  );
}
