import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/Login'
import BluetoothScreen from './app/screens/BluetoothScreen';
import DashboardScreen from './app/screens/DashboardScreen';
import Settings from './app/screens/Settings';
import FeedbackScreen from './app/screens/Feedback';
// import React, { useEffect } from "react";
import ProfileCard from './app/screens/Profile';


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();


export default function App() {

 


  return (
     <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Bluetooth" component={BluetoothScreen}/>
        <Stack.Screen name="Dashboard" component={DashboardScreen}/>
        <Stack.Screen name="Profile" component={ProfileCard}/>
        <Stack.Screen name='Settings' component={Settings}/>
        <Stack.Screen name='Feedback' component={FeedbackScreen}/>

      </Stack.Navigator>
    </NavigationContainer>

  );
}


 