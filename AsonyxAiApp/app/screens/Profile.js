import React from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ProfileHeader from "../components/ProfileHeader";
import MapHistory from "../components/MapHistory"
import PrivacyControlsCard from "../components/PrivacyControl";



export default function Profile({navigation}) {
  return (


    
    <SafeAreaView>
    <ScrollView contentContainerStyle={styles.container}>
        <ProfileHeader navigation={navigation}/>
      <View style={styles.card}>
        
        {/* Personal Info */}
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <View style={styles.row}>
          <View style={styles.infoBlock}>
            <Text style={styles.label}>First Name</Text>
            <Text style={styles.value}>Alex</Text>
          </View>
          <View style={styles.infoBlock}>
            <Text style={styles.label}>Last Name</Text>
            <Text style={styles.value}>Morgan</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.infoBlock}>
            <Text style={styles.label}>Birthday</Text>
            <Text style={styles.value}>April 15, 1990</Text>
          </View>
          <View style={styles.infoBlock}>
            <Text style={styles.label}>Gender</Text>
            <Text style={styles.value}>Female</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>

        {/* Contact Info */}
        <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Contact Information</Text>

        <View style={styles.infoBlock}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>alex.morgan@example.com</Text>
        </View>

        <View style={styles.infoBlock}>
          <Text style={styles.label}>Phone</Text>
          <Text style={styles.value}>+1 (555) 123-4567</Text>
        </View>

        <View style={styles.infoBlock}>
          <Text style={styles.label}>Address</Text>
          <Text style={styles.value}>123 Main St, Apt 4B</Text>
          <Text style={styles.value}>New York, NY 10001</Text>
        </View>

        <TouchableOpacity style={styles.emergencyButton}>
          <Ionicons name="person" size={20} color="#fff" style={{ marginRight: 6 }} />
          <Text style={styles.emergencyButtonText}>Emergency Contacts</Text>
        </TouchableOpacity>
      </View>
      <MapHistory/>
      <PrivacyControlsCard/>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 7,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoBlock: {
    flex: 1,
    marginBottom: 12,
  },
  label: {
    fontSize: 12,
    color: "#555",
  },
  value: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
  },
  editButton: {
    borderWidth: 1,
    borderColor: "#666",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 4,
  },
  editButtonText: {
    color: "#333",
    fontSize: 14,
  },
  emergencyButton: {
    backgroundColor: "#5A46FF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 14,
  },
  emergencyButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
});
