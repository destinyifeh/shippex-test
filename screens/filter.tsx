// screens/FilterScreen.js
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const statuses = ['Received', 'Putaway', 'Delivered', 'Canceled', 'Rejected', 'Lost', 'On Hold'];

export default function FilterScreen() {
  const navigation = useNavigation();
const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  const toggleStatus = (status:string) => {
    setSelectedStatuses(prev =>
      prev.includes(status)
        ? prev.filter(s => s !== status)
        : [...prev, status]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cancel}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Filters</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.done}>Done</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>SHIPMENT STATUS</Text>
      <ScrollView contentContainerStyle={styles.statusContainer}>
        {statuses.map((status) => (
          <TouchableOpacity
            key={status}
            style={[styles.statusButton, selectedStatuses.includes(status) && styles.selected]}
            onPress={() => toggleStatus(status)}
          >
            <Text
              style={[styles.statusText, selectedStatuses.includes(status) && styles.selectedText]}
            >
              {status}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  cancel: { color: '#3F51B5', fontWeight: '600' },
  title: { fontSize: 16, fontWeight: '600' },
  done: { color: '#3F51B5', fontWeight: '600' },
  sectionTitle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 14,
    fontWeight: '600',
    color: '#444',
  },
  statusContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
  },
  statusButton: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 6,
  },
  selected: {
    backgroundColor: '#3F51B5',
    borderColor: '#3F51B5',
  },
  statusText: {
    fontSize: 13,
    color: '#333',
  },
  selectedText: {
    color: '#fff',
  },
});
