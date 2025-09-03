import React from "react";
import { View, Text, StyleSheet, TouchableOpacity ,Image , Alert } from "react-native";
// import { PermissionsAndroid, Platform } from "react-native";
// import { BleManager } from "react-native-ble-plx";



// const manager = new BleManager();

// async function requestBluetoothPermissions() {
//   if (Platform.OS === "android") {
//     await PermissionsAndroid.requestMultiple([
//       PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
//       PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
//       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//     ]);
//   }
// }
export default function BluetoothScreen({navigation}) {
    const scanDevices =()=>{
        navigation.navigate("Dashboard");
    }
//    useEffect(() => {
//     // Request permissions first
//     requestBluetoothPermissions();
//   }, []);

// const scanDevices = () => {
//     console.log("Scanning for Bluetooth devices...");
//     manager.startDeviceScan(null, null, (error, device) => {
//       if (error) {
//         console.error(error);
//         return;
//       }

//       console.log("Found device:", device.name);

//       // Check if it's our Raspberry Pi
//       if (device.name === "My_Raspberry_Pi") {
//         manager.stopDeviceScan();
//         device.connect()
//           .then(d => {
//             console.log("Connected to Raspberry Pi!");
//             return d.discoverAllServicesAndCharacteristics();
//           })
//           .then(d => {
//             console.log("Ready to communicate");
//           })
//           .catch(err => console.error(err));
//       }
//     });
//   };

  return (
    
    <View style={styles.container}>
            <View style={styles.card}>
                    <View style={styles.titleRow}>
                            <Image source={require("../assets/bluetooth.png")}
                            style={styles.logo}/>
                            <Text style={styles.title}>Bluetooth Device</Text>
                    </View>




                    <Text style={styles.info}>Status: Not Connected</Text>
                    <Text style={styles.info}>Device Name: Raspberry Pi</Text>



                    <TouchableOpacity style={styles.button} onPress={scanDevices}>
                            <Text style={styles.buttonText}>Connect</Text>
                    </TouchableOpacity>
          </View>


            <View style={styles.card}>
                    <View style={styles.titleRow}>
                            <Image source={require("../assets/wifi.png")}
                            style={styles.logo}/>
                            <Text style={styles.title}>WiFi Device</Text>
                    </View>




                    <Text style={styles.info}>Status: Not Connected</Text>
                    <Text style={styles.info}>Device Name: Raspberry Pi</Text>



                    <TouchableOpacity style={styles.button} onPress={scanDevices}>
                            <Text style={styles.buttonText}>Connect</Text>
                    </TouchableOpacity>
          </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
    marginTop:20
  

    
  },
  card: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,

    // Box Shadow for iOS
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 3 },
    // shadowOpacity: 0.1,
    // shadowRadius: 6,

    // Box Shadow for Android
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  info: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#1E90FF",
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

    titleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
});
