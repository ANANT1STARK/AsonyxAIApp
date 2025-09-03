import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function LocationHistoryCard() {
  const region = {
    latitude: 37.78825, // Example coords
    longitude: -122.4324,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Location History</Text>
        <View style={styles.statusContainer}>
          <View style={styles.statusDot} />
          <Text style={styles.statusText}>Active</Text>
        </View>
      </View>

      {/* Map */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={region}
          scrollEnabled={false}
          zoomEnabled={false}
        >
          <Marker coordinate={region} title="Current Location" />
        </MapView>
      </View>

      {/* Location Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.subTitle}>Last known location</Text>
        <Text style={styles.locationDetails}>
          The Brickhouse Bar • 2.3 mi away
        </Text>
        <Text style={styles.timeStamp}>Yesterday at 10:42 PM</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.historyButton}>
          <Text style={styles.historyButtonText}>View History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.shareButtonText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: { fontSize: 16, fontWeight: "bold", color: "#000" },
  statusContainer: { flexDirection: "row", alignItems: "center" },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "green",
    marginRight: 5,
  },
  statusText: { color: "green", fontSize: 14 },
  mapContainer: {
    height: 120,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 10,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  infoContainer: { marginBottom: 10 },
  subTitle: { fontSize: 14, color: "#555" },
  locationDetails: { fontSize: 15, fontWeight: "bold", color: "#000" },
  timeStamp: { fontSize: 12, color: "#888" },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  historyButton: {
    flex: 1,
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#6200EE",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  historyButtonText: { color: "#6200EE", fontWeight: "bold" },
  shareButton: {
    flex: 1,
    marginLeft: 8,
    backgroundColor: "#6200EE",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  shareButtonText: { color: "#fff", fontWeight: "bold" },
});
