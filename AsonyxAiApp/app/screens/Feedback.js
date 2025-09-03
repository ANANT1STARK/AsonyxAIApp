import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function FeedbackScreen() {
  const [feedbackType, setFeedbackType] = useState("Suggestion");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!message.trim()) {
      Alert.alert("Error", "Please enter your feedback before submitting.");
      return;
    }
    Alert.alert("Thank You!", "Your feedback has been submitted.");
    setMessage("");
    setEmail("");
  };

  return (
    <ScrollView style={{ flex: 1, padding: 10 }}>
      {/* Feedback Type */}
      <View style={styles.card}>
        <Text style={styles.header}>Feedback Type</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={feedbackType}
            style={{ height: 40 }}
            onValueChange={(value) => setFeedbackType(value)}
          >
            <Picker.Item label="Suggestion" value="Suggestion" />
            <Picker.Item label="Bug Report" value="Bug Report" />
            <Picker.Item label="Other" value="Other" />
          </Picker>
        </View>
      </View>

      {/* Feedback Message */}
      <View style={styles.card}>
        <Text style={styles.header}>Your Feedback</Text>
        <TextInput
          style={[styles.input, { height: 120, textAlignVertical: "top" }]}
          placeholder="Write your feedback here..."
          value={message}
          onChangeText={setMessage}
          multiline
        />
      </View>

      {/* Optional Email */}
      <View style={styles.card}>
        <Text style={styles.header}>Your Email (optional)</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit Feedback</Text>
      </TouchableOpacity>
    </ScrollView>
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
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 14,
    backgroundColor: "#f9f9f9",
  },
  submitBtn: {
    backgroundColor: "#6c5ce7",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 30,
  },
  submitText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
