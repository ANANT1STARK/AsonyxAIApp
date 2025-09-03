import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  // If using Expo SDK 51+, use @react-native-picker/picker
} from "react-native";
import { Picker } from "@react-native-picker/picker";
export default function SettingsCards() {
  const [locationSharing, setLocationSharing] = useState(true);
  const [profileVisibility, setProfileVisibility] = useState("Public");

  return (
    <View style={styles.container}>
      {/* Account Settings */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Account Settings</Text>

        <View style={styles.row}>
          <Text style={styles.optionTitle}>Change Password</Text>
          <TouchableOpacity>
            <Text style={styles.link}>Edit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <Text style={styles.optionTitle}>Email Preferences</Text>
          <TouchableOpacity>
            <Text style={styles.link}>Edit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <Text style={styles.optionTitle}>Two-Factor Authentication</Text>
          <TouchableOpacity>
            <Text style={styles.enable}>Enable</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Privacy Settings */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Privacy Settings</Text>

        {/* Profile Visibility */}
        <View style={styles.row}>
          <Text style={styles.optionTitle}>Profile Visibility</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={profileVisibility}
              style={styles.picker}
              onValueChange={(itemValue) => setProfileVisibility(itemValue)}
            >
              <Picker.Item label="Public" value="Public" />
              <Picker.Item label="Private" value="Private" />
              <Picker.Item label="Friends" value="Friends" />
            </Picker>
          </View>
        </View>

        {/* Location Sharing */}
        <View style={styles.row}>
          <Text style={styles.optionTitle}>Location Sharing</Text>
          <Switch
            value={locationSharing}
            onValueChange={setLocationSharing}
            trackColor={{ false: "#ccc", true: "#B3C4FF" }}
            thumbColor={locationSharing ? "#5A67D8" : "#f4f3f4"}
          />
        </View>

        {/* Data Sharing */}
        <View style={styles.row}>
          <Text style={styles.optionTitle}>Data Sharing</Text>
          <TouchableOpacity>
            <Text style={styles.link}>Manage</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#000",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  optionTitle: {
    fontSize: 15,
    color: "#000",
  },
  link: {
    color: "#5A67D8",
    fontWeight: "bold",
  },
  enable: {
    color: "#3182CE",
    fontWeight: "bold",
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    overflow: "hidden",
  },
  picker: {
    height: 35,
    width: 120,
  },
});
