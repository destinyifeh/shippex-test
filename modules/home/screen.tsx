import CheckBox from '@react-native-community/checkbox';
import { Bell, ListFilter, ScanLine, Search } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  FlatList,
  Image,
  Modal,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const shipmentsData = [
  {
    id: '1',
    awb: '41785691423',
    from: 'Cairo',
    to: 'Alexandria',
    status: 'RECEIVED',
  },
  {
    id: '2',
    awb: '41785691423',
    from: 'Cairo',
    to: 'Alexandria',
    status: 'CANCELED',
  },
  {
    id: '3',
    awb: '41785691423',
    from: 'Cairo',
    to: 'Alexandria',
    status: 'CANCELED',
  },
  {
    id: '4',
    awb: '41785691423',
    from: 'Cairo',
    to: 'Alexandria',
    status: 'CANCELED',
  },
  {
    id: '5',
    awb: '41785691423',
    from: 'Cairo',
    to: 'Alexandria',
    status: 'CANCELED',
  },
];
const statuses = [
  'Received',
  'Putaway',
  'Delivered',
  'Canceled',
  'Rejected',
  'Lost',
  'On Hold',
];

export const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [markAll, setMarkAll] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const toggleSelection = (id: string) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id],
    );
  };

  const toggleMarkAll = () => {
    const allIds = shipmentsData.map(item => item.id);
    setMarkAll(!markAll);
    setSelectedIds(!markAll ? allIds : []);
  };

  const toggleStatus = (status: string) => {
    setSelectedStatuses(prev =>
      prev.includes(status)
        ? prev.filter(s => s !== status)
        : [...prev, status],
    );
  };

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        },
      ]}
    >
      <StatusBar translucent barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.headerRow}>
        <View style={styles.userColumn}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/300' }}
            style={styles.avatar}
          />
        </View>

        <Image source={require('../../assets/logo.png')} />
        <View
          style={{
            width: 30,
            height: 30,
            backgroundColor: '#F4F2F8',
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Bell size={20} color="#2F50C1" />
        </View>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={{ color: 'gray' }}>Hello,</Text>
        <Text style={styles.username}>Ibrahim Shaker</Text>
      </View>

      <View style={styles.searchInputWrapper}>
        <Search size={18} color="#94a3b8" style={styles.searchIcon} />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#94a3b8"
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.filterBtn}
          onPress={() => setShowFilters(true)}
        >
          <ListFilter size={16} color="#334155" />
          <Text style={styles.btnText}>Filters</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.scanBtn}>
          <ScanLine size={16} color="#fff" />
          <Text style={styles.scanText}>Add Scan</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.shipmentHeader}>
        <Text style={styles.shipmentTitle}>Shipments</Text>
        <View style={styles.markAllRow}>
          <CheckBox value={markAll} onValueChange={toggleMarkAll} />
          <Text style={styles.markAllText}>Mark All</Text>
        </View>
      </View>

      <FlatList
        data={shipmentsData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <CheckBox
              value={selectedIds.includes(item.id)}
              onValueChange={() => toggleSelection(item.id)}
            />
            <Image
              source={require('../../assets/box-icon.png')}
              style={styles.packageIcon}
            />
            <View style={styles.shipmentInfo}>
              <Text style={styles.awbLabel}>AWB</Text>
              <Text style={styles.awb}>{item.awb}</Text>
              <Text style={styles.route}>
                {item.from} → {item.to}
              </Text>
            </View>
            <View style={styles.statusContainer}>
              <Text
                style={[
                  styles.status,
                  item.status === 'RECEIVED'
                    ? styles.received
                    : styles.canceled,
                ]}
              >
                {item.status}
              </Text>
            </View>
            <TouchableOpacity>
              <Image
                source={require('../../assets/arrow-expand.png')}
                style={{ height: 15, width: 15 }}
              />
            </TouchableOpacity>
          </View>
        )}
      />

      <Modal visible={showFilters} animationType="slide" transparent>
        <View style={styles.bottomSheetContainer}>
          <View style={styles.bottomSheet}>
            <View style={styles.filterHeader}>
              <Pressable onPress={() => setShowFilters(false)}>
                <Text style={styles.cancelBtn}>Cancel</Text>
              </Pressable>
              <Text style={styles.sheetTitle}>Filters</Text>
              <Pressable onPress={() => setShowFilters(false)}>
                <Text style={styles.doneBtn}>Done</Text>
              </Pressable>
            </View>
            <Text style={styles.sectionTitle}>SHIPMENT STATUS</Text>
            <View style={styles.chipContainer}>
              {statuses.map(status => {
                const selected = selectedStatuses.includes(status);
                return (
                  <TouchableOpacity
                    key={status}
                    style={[styles.chip, selected && styles.chipSelected]}
                    onPress={() => toggleStatus(status)}
                  >
                    <Text
                      style={[
                        styles.chipText,
                        selected && styles.chipTextSelected,
                      ]}
                    >
                      {status}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#fff', flex: 1 },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  userColumn: { alignItems: 'center' },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  username: { fontSize: 14, color: 'black', marginTop: 4, fontWeight: 'bold' },
  appName: { fontWeight: 'bold', fontSize: 16, color: '#2F50C1' },

  searchInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F2F8',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 12,
  },
  searchIcon: {
    marginRight: 6,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 14,
    color: '#0f172a',
  },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between' },
  filterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F2F8',
    padding: 10,
    borderRadius: 10,
  },
  btnText: { marginLeft: 4, fontSize: 14 },
  scanBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2F50C1',
    padding: 10,
    borderRadius: 10,
  },
  scanText: { color: '#fff', marginLeft: 4 },
  shipmentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
  },
  shipmentTitle: { fontWeight: 'bold', fontSize: 16 },
  markAllRow: { flexDirection: 'row', alignItems: 'center' },
  markAllText: { marginLeft: 6, color: '#2F50C1' },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F2F8',
    padding: 10,
    borderRadius: 12,
    marginVertical: 5,
  },
  packageIcon: { width: 30, height: 30, marginHorizontal: 10 },
  shipmentInfo: { flex: 1 },
  awbLabel: { fontSize: 12, color: '#64748b' },
  awb: { fontWeight: 'bold', fontSize: 14 },
  route: { color: '#64748b', fontSize: 12 },
  statusContainer: { marginRight: 8 },
  status: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    fontSize: 12,
    textTransform: 'uppercase',
  },
  received: { backgroundColor: '#dbeafe', color: '#1d4ed8' },
  canceled: { backgroundColor: '#fef2f2', color: '#b91c1c' },

  bottomSheetContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  bottomSheet: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 20,
  },
  filterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  cancelBtn: { color: '#3b82f6' },
  doneBtn: { color: '#3b82f6' },
  sheetTitle: { fontWeight: 'bold', fontSize: 16 },
  sectionTitle: { color: '#64748b', marginBottom: 8 },
  chipContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  chip: {
    backgroundColor: '#F4F2F8',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    margin: 4,
  },

  chipSelected: {
    backgroundColor: '#F4F2F8',
    borderColor: '#6E91EC',
    borderWidth: 0.5,
  },
  chipText: { color: '#58536E' },
  chipTextSelected: { color: '#6E91EC' },
});
