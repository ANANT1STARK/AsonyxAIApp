import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AlcoholCard = () => {
  const data = [
    { date: 'Today', amount: '1.4 std drinks', status: 'Moderate', color: '#fbc02d' },
    { date: 'Yesterday', amount: '0.8 std drinks', status: 'Low', color: '#81c784' },
    { date: 'Wed, Jan 10', amount: '5.2 std drinks', status: 'High', color: '#e57373' },
  ];

  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Alcohol Consumption</Text>
        <TouchableOpacity>
          <Text style={styles.addEntry}>Add Entry</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <Text style={[styles.tab, styles.activeTab]}>Week</Text>
        <Text style={styles.tab}>Month</Text>
        <Text style={styles.tab}>Year</Text>
      </View>

      {/* List */}
      {data.map((item, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.date}>{item.date}</Text>
          <View style={styles.rowRight}>
            <Text style={styles.amount}>{item.amount}</Text>
            <View style={[styles.badge, { backgroundColor: item.color }]}>
              <Text style={styles.badgeText}>{item.status}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    margin: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  addEntry: { fontSize: 14, color: '#007bff' },

  tabs: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  tab: {
    marginRight: 20,
    fontSize: 14,
    color: '#777',
    paddingBottom: 5,
  },
  activeTab: {
    color: '#007bff',
    borderBottomWidth: 2,
    borderBottomColor: '#007bff',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
  },
  date: { fontSize: 14, color: '#555' },
  rowRight: { flexDirection: 'row', alignItems: 'center' },
  amount: { fontSize: 14, color: '#333', marginRight: 10 },
  badge: {
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  badgeText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AlcoholCard;
