import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

export default function PrivacyControlsCard() {
  const [shareLocation, setShareLocation] = useState(true);
  const [alcoholTracking, setAlcoholTracking] = useState(false);

  return (
    <View style={styles.card}>
      {/* Title */}
      <Text style={styles.title}>Privacy Controls</Text>

      {/* Share Location */}
      <View style={styles.row}>
        <View>
          <Text style={styles.optionTitle}>Share Location</Text>
          <Text style={styles.optionSubtitle}>With emergency contacts</Text>
        </View>
        <Switch
          value={shareLocation}
          onValueChange={setShareLocation}
          trackColor={{ false: "#ccc", true: "#B3C4FF" }}
          thumbColor={shareLocation ? "#5A67D8" : "#f4f3f4"}
        />
      </View>

      {/* Alcohol Tracking */}
      <View style={styles.row}>
        <View>
          <Text style={styles.optionTitle}>Alcohol Tracking</Text>
          <Text style={styles.optionSubtitle}>Share consumption history</Text>
        </View>
        <Switch
          value={alcoholTracking}
          onValueChange={setAlcoholTracking}
          trackColor={{ false: "#ccc", true: "#B3C4FF" }}
          thumbColor={alcoholTracking ? "#5A67D8" : "#f4f3f4"}
        />
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
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  title: {
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
    fontWeight: "500",
    color: "#000",
  },
  optionSubtitle: {
    fontSize: 13,
    color: "#888",
  },
});
