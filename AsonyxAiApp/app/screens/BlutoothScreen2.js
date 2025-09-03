import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  StyleSheet,
} from "react-native";


export default function BluetoothPage() {
  const [devices, setDevices] = useState([]);
  const [connectedDevice, setConnectedDevice] = useState(null);
  const [status, setStatus] = useState("Not Connected");

  // Request permissions for Android 12+
  const requestBluetoothPermissions = async () => {
    if (Platform.OS === "android" && Platform.Version >= 31) {
      await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      ]);
    }
  };

  // Scan for devices
  const scanForDevices = async () => {
    try {
      setStatus("Scanning...");
      const unpaired = await RNBluetoothClassic.startDiscovery();
      const bonded = await RNBluetoothClassic.getBondedDevices();
      setDevices([...bonded, ...unpaired]);
      setStatus("Scan complete");
    } catch (err) {
      console.log("Scan error:", err);
      setStatus("Scan failed");
    }
  };

  // Connect to selected device
  const connectToDevice = async (device) => {
    try {
      setStatus(`Connecting to ${device.name}...`);
      const connection = await device.connect();
      if (connection) {
        setConnectedDevice(device);
        setStatus(`Connected to ${device.name}`);
      }
    } catch (err) {
      console.log("Connection error:", err);
      setStatus("Connection failed");
    }
  };

  useEffect(() => {
    requestBluetoothPermissions();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Bluetooth Devices</Text>
      <Text style={styles.status}>{status}</Text>

      <TouchableOpacity style={styles.scanButton} onPress={scanForDevices}>
        <Text style={styles.scanText}>Scan for Devices</Text>
      </TouchableOpacity>

      <FlatList
        data={devices}
        keyExtractor={(item) => item.address}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.deviceItem}
            onPress={() => connectToDevice(item)}
          >
            <Text style={styles.deviceName}>
              {item.name || "Unknown Device"}
            </Text>
            <Text style={styles.deviceAddr}>{item.address}</Text>
          </TouchableOpacity>
        )}
      />

      {connectedDevice && (
        <View style={styles.connectedBox}>
          <Text style={styles.connectedText}>
            ✅ Connected to {connectedDevice.name}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f9f9f9" },
  heading: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  status: { marginBottom: 10, fontSize: 14, color: "gray" },
  scanButton: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: "center",
  },
  scanText: { color: "white", fontSize: 16, fontWeight: "600" },
  deviceItem: {
    padding: 15,
    backgroundColor: "white",
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
  },
  deviceName: { fontSize: 16, fontWeight: "600" },
  deviceAddr: { fontSize: 12, color: "gray" },
  connectedBox: {
    marginTop: 15,
    padding: 12,
    backgroundColor: "#d1f7d6",
    borderRadius: 8,
  },
  connectedText: { color: "green", fontWeight: "bold", fontSize: 16 },
});
