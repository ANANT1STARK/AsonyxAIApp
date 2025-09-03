import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function EmergencyMessageCard() {
  return (
    <View style={styles.card}>
      {/* Card Header */}
      <View style={styles.header}>
        <AntDesign name="message1" size={22} color="#FF3B30" />
        <Text style={styles.title}>Emergency Message</Text>
      </View>

      {/* Message Preview */}
      <View style={styles.messageBox}>
        <Text style={styles.messageText}>
          "This is an emergency! Please send help to my current location."
        </Text>
      </View>

      {/* Edit Button */}
      <TouchableOpacity style={styles.editButton}>
        <AntDesign name="edit" size={18} color="#007AFF" />
        <Text style={styles.editText}>Edit Message</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
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
  messageBox: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  messageText: {
    fontSize: 15,
    color: '#333',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editText: {
    marginLeft: 6,
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '500',
  },
});
