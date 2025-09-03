import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function EmergencyContactsCard() {
  return (
    <View style={styles.card}>
      {/* Card Header */}
      <View style={styles.header}>
        <AntDesign name="contacts" size={22} color="#007AFF" />
        <Text style={styles.title}>Emergency Contacts</Text>
      </View>

      {/* Contact List */}
      <View style={styles.contactList}>
        <Text style={styles.contactItem}>👤 John Doe - 1234567890</Text>
        <Text style={styles.contactItem}>👤 Jane Smith - 9876543210</Text>
      </View>

      {/* Add More Button */}
      <TouchableOpacity style={styles.addButton}>
        <AntDesign name="pluscircleo" size={18} color="#007AFF" />
        <Text style={styles.addText}>Add More</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    margin : 15,
    // Strong shadow for visibility
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5, // for Android
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  contactList: {
    marginBottom: 12,
  },
  contactItem: {
    fontSize: 16,
    marginVertical: 4,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addText: {
    marginLeft: 6,
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '500',
  },
});
