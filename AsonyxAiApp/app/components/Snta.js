import React, { useState } from "react";
import { View, Text, Switch, TouchableOpacity, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function SettingsCard() {
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState("Small");

  return (
    <View style={{ padding: 10 }}>
      {/* Notification Settings */}
      <View style={styles.card}>
        <Text style={styles.header}>Notification Settings</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Push Notifications</Text>
          <Switch
            value={pushNotifications}
            onValueChange={setPushNotifications}
            trackColor={{ true: "#a29bfe" }}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Email Notifications</Text>
          <Switch
            value={emailNotifications}
            onValueChange={setEmailNotifications}
            trackColor={{ true: "#a29bfe" }}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Sound and Vibration</Text>
          <TouchableOpacity>
            <Text style={styles.link}>Customize</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Theme and Appearance */}
      <View style={styles.card}>
        <Text style={styles.header}>Theme and Appearance</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Dark/Light Mode</Text>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ true: "#a29bfe" }}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Font Size</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={fontSize}
              style={{ height: 30, width: 120 }}
              onValueChange={(itemValue) => setFontSize(itemValue)}
            >
              <Picker.Item label="Small" value="Small" />
              <Picker.Item label="Medium" value="Medium" />
              <Picker.Item label="Large" value="Large" />
            </Picker>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Profile Theme</Text>
          <TouchableOpacity>
            <Text style={styles.link}>Choose</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
  },
  label: {
    fontSize: 14,
  },
  link: {
    color: "#6c5ce7",
    fontWeight: "bold",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
  },
});
