import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import React from 'react';

import {
  CircleUser,
  Package,
  PackageCheck,
  ScanBarcode,
  Wallet,
} from 'lucide-react-native';
import HomeScreen from '../home';
import ProfileScreen from '../profile';
import ScanScreen from '../scan';
import WalletScreen from '../wallet';

const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Shipments') {
            return focused ? (
              <PackageCheck color={color} size={size} />
            ) : (
              <Package color={color} size={size} />
            );
          } else if (route.name === 'Scan') {
            return <ScanBarcode color={color} size={size} />;
          } else if (route.name === 'Wallet') {
            return <Wallet color={color} size={size} />;
          } else if (route.name === 'Profile') {
            return <CircleUser color={color} size={size} />;
          }
        },
        tabBarActiveTintColor: '#3F51B5',
        tabBarInactiveTintColor: '#58536E',
      })}
    >
      <Tab.Screen name="Shipments" component={HomeScreen} />
      <Tab.Screen name="Scan" component={ScanScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default MainTabs;
