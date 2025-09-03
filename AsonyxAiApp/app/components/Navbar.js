import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';





export default function Navbar({navigation}) {


 return(
<View style={styles.topBar}>

   
        {/* User Avatar + Name */}
        <View style={styles.userSection}>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image
            source={require("../assets/avatar.png")} // placeholder avatar
            style={styles.avatar}
          />
          </TouchableOpacity>
          <Text style={styles.username}>John Doe</Text>
          
        </View>

        {/* Product Logo */}
        <Image
          source={require("../assets/logo.png")} // product logo placeholder
          style={styles.productLogo}
        />

        {/* Settings Icon */}
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Image
            source={require("../assets/settings.png")} // placeholder avatar
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>
      
)}
    const styles = StyleSheet.create({
          topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // for Android shadow
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginRight: 8,
  },
  username: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#333',
  },
  productLogo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
    //     borderWidth : 2,
    // borderColor : 'red',
  },});