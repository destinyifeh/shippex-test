// screens/HomeScreen.js
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from './types';

interface ShipmentItem {
  id: string; // Added id to match the data structure
  awb: string;
  from: string;
  to: string;
  status: 'RECEIVED' | 'CANCELED' | 'DELIVERED' | 'ON_HOLD'; // Ensure status matches this union type
}



const dummyShipments: ShipmentItem[] = [
  { id: '1', awb: '41785691423', from: 'Cairo', to: 'Alexandria', status: 'RECEIVED' },
  { id: '2', awb: '41785691423', from: 'Cairo', to: 'Alexandria', status: 'CANCELED' },
  { id: '3', awb: '41785691423', from: 'Cairo', to: 'Alexandria', status: 'CANCELED' },
];

export default function HomeScreen() {
const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  // Define a TypeScript interface for the shipment item
interface ShipmentItem {
  awb: string;
  from: string;
  to: string;
  status: 'RECEIVED' | 'CANCELED' | 'DELIVERED' | 'ON_HOLD'; // Add possible status values
}

 const renderItem = ({ item }: { item: ShipmentItem }) => (
    <View style={styles.shipmentItem}>
      {/* <Image source={require('../assets/box.png')} style={styles.boxIcon} /> */}
      <View style={{ flex: 1 }}>
        <Text style={styles.awb}>AWB {item.awb}</Text>
        <Text style={styles.route}>{item.from} → {item.to}</Text>
      </View>
<Text style={styles[item.status.toLowerCase() as keyof typeof styles]}>{item.status}</Text>    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, Ibrahim Shaker</Text>
        <TextInput placeholder="Search" style={styles.search} />
        <View style={styles.actions}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Filters')}>
            <Text style={styles.buttonText}>Filters</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Add Scan</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={dummyShipments}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { padding: 20 },
  greeting: { fontSize: 18, fontWeight: '600', marginBottom: 10 },
  search: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  actions: { flexDirection: 'row', justifyContent: 'space-between' },
  button: {
    backgroundColor: '#3F51B5',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  buttonText: { color: '#fff', fontWeight: '600' },
  shipmentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  boxIcon: { width: 32, height: 32, marginRight: 10 },
  awb: { fontWeight: '600' },
  route: { color: '#666' },
  received: { color: 'blue', fontWeight: 'bold' },
  canceled: { color: 'gray', fontWeight: 'bold' },
});
