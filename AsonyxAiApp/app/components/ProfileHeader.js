import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialIcons";
import Navbar from "./Navbar";
export default function ProfileHeader({navigation}) {
  return (
    <View style={styles.container}>
        <Navbar navigation={navigation}/>
      {/* Header with Gradient */}
      <LinearGradient
        colors={["#e6f0ff", "#ffffff"]}
        style={styles.header}
      >
        {/* Avatar */}
        <Image
          source={require("../assets/sg.png")}
          style={styles.avatar}
        />

        {/* Name */}
        <Text style={styles.name}>Suyash Gupta</Text>
        <Text style={styles.title}>Interior designer</Text>

        {/* Location */}
        <View style={styles.locationRow}>
          <Icon name="location-on" size={18} color="#555" />
          <Text style={styles.location}>Lagos, Nigeria</Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Edit profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>helmet_connect</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Info Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Personal Information</Text>

        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>First Name</Text>
            <Text style={styles.value}>Alex</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.label}>Last Name</Text>
            <Text style={styles.value}>Morgan</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Birthday</Text>
            <Text style={styles.value}>April 15, 1990</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.label}>Gender</Text>
            <Text style={styles.value}>Female</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  header: {
    alignItems: "center",
    paddingVertical: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#fff",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  title: {
    fontSize: 14,
    color: "#777",
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  location: {
    fontSize: 14,
    color: "#555",
    marginLeft: 3,
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: 15,
  },
  button: {
    backgroundColor: "#1a237e",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
  card: {
    backgroundColor: "#fff",
    margin: 15,
    borderRadius: 15,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    marginBottom: 15,
  },
  col: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: "#777",
  },
  value: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 3,
  },
});
