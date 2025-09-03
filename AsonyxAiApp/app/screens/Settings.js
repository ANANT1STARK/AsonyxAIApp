import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Switch,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../components/Navbar";


export default function SettingsScreen({navigation}) {
  const [profileVisibility, setProfileVisibility] = useState("Public");
  const [fontSize, setFontSize] = useState("Small");
  const [language, setLanguage] = useState("English");
  const [locationSharing, setLocationSharing] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (

    <SafeAreaView style={{ flex: 1, padding: 10 }}>
    <ScrollView >


        <Navbar navigation={navigation}/>
      {/* Account Settings */}
      <View style={styles.card}>
        <Text style={styles.header}>Account Settings</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Change Password</Text>
          <TouchableOpacity>
            <Text style={styles.link}>Edit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Email Preferences</Text>
          <TouchableOpacity>
            <Text style={styles.link}>Edit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Two-Factor Authentication</Text>
          <TouchableOpacity>
            <Text style={styles.link}>Enable</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Privacy Settings */}
      <View style={styles.card}>
        <Text style={styles.header}>Privacy Settings</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Profile Visibility</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={profileVisibility}
              style={{ height: 30, width: 130 }}
              onValueChange={(value) => setProfileVisibility(value)}
            >
              <Picker.Item label="Public" value="Public" />
              <Picker.Item label="Private" value="Private" />
            </Picker>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Location Sharing</Text>
          <Switch
            value={locationSharing}
            onValueChange={setLocationSharing}
            trackColor={{ true: "#6c5ce7", false: "#ccc" }}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Data Sharing</Text>
          <TouchableOpacity>
            <Text style={styles.link}>Manage</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Notification Settings */}
      <View style={styles.card}>
        <Text style={styles.header}>Notification Settings</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Push Notifications</Text>
          <Switch
            value={pushNotifications}
            onValueChange={setPushNotifications}
            trackColor={{ true: "#6c5ce7", false: "#ccc" }}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Email Notifications</Text>
          <Switch
            value={emailNotifications}
            onValueChange={setEmailNotifications}
            trackColor={{ true: "#6c5ce7", false: "#ccc" }}
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
            trackColor={{ true: "#6c5ce7", false: "#ccc" }}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Font Size</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={fontSize}
              style={{ height: 30, width: 130 }}
              onValueChange={(value) => setFontSize(value)}
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

      {/* Security Settings */}
      <View style={styles.card}>
        <Text style={styles.header}>Security Settings</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Logout from All Devices</Text>
          <TouchableOpacity>
            <Text style={[styles.link, { color: "red" }]}>Logout</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Active Sessions</Text>
          <TouchableOpacity>
            <Text style={styles.link}>View</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Security Questions</Text>
          <TouchableOpacity>
            <Text style={styles.link}>Set</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Help and Support */}
      <View style={styles.card}>
        <Text style={styles.header}>Help and Support</Text>

        <View style={styles.row}>
          <Text style={styles.label}>FAQ</Text>
          <TouchableOpacity>
            <Text style={styles.link}>View</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Contact Support</Text>
          <TouchableOpacity>
            <Text style={styles.link}>Email</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Report a Problem</Text>
          <TouchableOpacity>
            <Text style={styles.link}>Report</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* App Settings */}
      <View style={styles.card}>
        <Text style={styles.header}>App Settings</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Language Preferences</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={language}
              style={{ height: 30, width: 130 }}
              onValueChange={(value) => setLanguage(value)}
            >
              <Picker.Item label="English" value="English" />
              <Picker.Item label="Hindi" value="Hindi" />
              <Picker.Item label="Spanish" value="Spanish" />
            </Picker>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Data Usage</Text>
          <TouchableOpacity>
            <Text style={styles.link}>Manage</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>App Version</Text>
          <Text style={{ color: "#777" }}>1.0.0</Text>
        </View>
      </View>

      {/* Logout Button */}
      <TouchableOpacity onPress={()=>{navigation.navigate("Feedback")}}style={styles.logoutBtn}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    margin: 15,
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
  logoutBtn: {
    backgroundColor: "red",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 30,
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
