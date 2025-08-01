// App.js
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
//import { Ionicons } from 'react-native-vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { Package, PackageCheck, ScanLine, User, Wallet } from 'lucide-react-native';
import FilterScreen from './screens/filter';
import HomeScreen from './screens/home';
import LoginScreen from './screens/login';
import ScanScreen from './screens/scan';
import WalletScreen from './screens/wallet';

const Stack =  createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
  
     <Tab.Navigator
  screenOptions={({ route }) => ({
    headerShown: false,
    tabBarIcon: ({ focused, color, size }) => {
      if (route.name === 'Shipments') {
        return focused
          ? <PackageCheck color={color} size={size} />
          : <Package color={color} size={size} />;
      } else if (route.name === 'Scan') {
        return <ScanLine color={color} size={size} />;
      } else if (route.name === 'Wallet') {
        return <Wallet color={color} size={size} />;
      } else if (route.name === 'Profile') {
        return <User color={color} size={size} />;
      }
    },
    tabBarActiveTintColor: '#3F51B5',
    tabBarInactiveTintColor: 'gray',
  })}
>
      <Tab.Screen name="Shipments" component={HomeScreen} />
      <Tab.Screen name="Scan" component={ScanScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Profile" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={MainTabs} />
        <Stack.Screen name="Filters" component={FilterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View  style={{flex:1, marginTop:30}}>
    //   <Text>dddd</Text>
    // </View>
  );
}
