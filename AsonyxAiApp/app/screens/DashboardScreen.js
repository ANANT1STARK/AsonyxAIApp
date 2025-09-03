import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity ,ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LocationMap from '../components/Map';
import EmergencyContactsCard from '../components/EmergencyCall';
import EmergencyMessageCard from '../components/EmergencyMessage';
import AlcoholCard from '../components/AlchoholCard';
import Navbar from '../components/Navbar';


export default function Dashboard({navigation , percentage = 10}) {
  return (
 
    <SafeAreaView style={styles.container}>
       <ScrollView>
      {/* Top Bar */}
      <Navbar navigation={navigation}/>

      {/* Dashboard content */}

      {/* 3 cards  */}
        


                    <View style={styles.card}>
      {/* Icon */}
                            <View style={styles.batteryContainer}>
        {/* Battery Level */}
                                   <View
                                            style={[
                                                    styles.batteryLevel,
                                                {
                                                  width: `${percentage}%`,
                                                    backgroundColor:
                                                    percentage > 50 ? "#4CAF50" : percentage > 20 ? "#FFC107" : "#F44336",
                                                 },
                                                ]}
                                    />
                                            </View>

      {/* Text Info */}
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Battery Status</Text>
                        <Text style={[styles.percentage, {color:
                percentage > 50 ? "#4CAF50" : percentage > 20 ? "#FFC107" : "#F44336",
            }]}>{percentage}%</Text>
                    </View>

                    </View>




 
{/* 2nd card  */}

               


                    <View style={styles.card2}>
      {/* Icon */}
                            <View >
                                            <Image
          source={require("../assets/speed.png")} // product logo placeholder
          style={styles.productLogo}
        />
                            </View>

      {/* Text Info */}
                            <View >
                                <Text style={styles.title}> Current Speed</Text>
                                <Text style={{color:'black' , fontSize:20}}> 45  Km/h</Text>
                            </View>
                    </View>


     

{/* 3rd card  */}

     


                    <View style={styles.card2}>
      {/* Icon */}
                            <View >
                                            <Image
          source={require("../assets/video.png")} // product logo placeholder
          style={styles.productLogo}
        />
                            </View>

      {/* Text Info */}

                            <View >
                                <Text style={styles.title}>Live Camera</Text>
                                <Text style={{color:'red',fontWeight:'bold', fontSize:20}}> Recording </Text>
                            </View>

                    </View>
                    

<View style={{flexDirection:'row',justifyContent:'center'}}>
    
        <View style={styles.card2}>
      {/* Icon */}
                            <View >
                                            <Text style={{fontSize:22}}>Contacts</Text>
                                            <Text style={{fontWeight:'bold',fontSize:20 , color:'blue'}}>24</Text>
                            </View>
 
      {/* Text Info */}
                        
                    </View>

                <View style={styles.card2}>
      {/* Icon */}
                            <View >
                                            <Text style={{fontSize:22}}>This Week</Text>
                                            <Text style={{fontWeight:'bold',fontSize:20 , color:'red'}}>3.2</Text>
                                            <Text style={{fontSize:22}}>Standard Drink</Text>
                            </View>
 
      {/* Text Info */}
                        
                    </View>






  


</View>
      

<LocationMap/>
<EmergencyContactsCard/>
<EmergencyMessageCard/>
<AlcoholCard/>

             </ScrollView>
    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  percentage: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50', // Green for charged battery
    marginLeft : 20,
  },
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
    borderRadius: 15,

    // BIGGER shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 12, // Android shadow

    // Space inside
    gap: 15,
  },
  card2 : {

flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
    borderRadius: 15,

    // BIGGER shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 12, // Android shadow

    // Space inside
    gap: 15,


  },
    icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
    textContainer: {
    flexDirection: 'row',
   
    alignItems : 'center'
  },
    batteryContainer: {
    width: "80%",
    height: 25,
    borderWidth: 2,
    borderColor: "#333",
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "#e0e0e0",
  },
  batteryLevel: {
    height: "100%",
  },
});
