import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen Placeholder</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});
