import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { RootStackParamList } from '../../screens/types';
const deviceHeight = Dimensions.get('window').height;
const LandingScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#2F50C1',
      }}
    >
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="#2F50C1"
      />

      <View style={styles.landingContainer}>
        <Image
          source={require('../../assets/shippex-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 180,
    height: 80,
  },
  landingContainer: {
    flex: 1,
    backgroundColor: '#2F50C1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    position: 'absolute',
    bottom: deviceHeight * 0.1,
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 80,
    borderRadius: 20,
  },
  loginText: {
    color: '#2F50C1',
    fontSize: 18,
    fontWeight: '600',
  },
});

export { LandingScreen };
