import React from 'react';
import { View , StyleSheet , Text , Image , TouchableOpacity} from 'react-native';
function WelcomeScreen({navigation}) {
    return (
        <View style={css.container}>


            <View >
                <Image style={css.imageSet} source={require("../assets/logo.png")}></Image>
            </View>


            <View >
                <TouchableOpacity style={css.button} onPress={() => navigation.navigate("Login")}>
                    <Text style={css.buttonText}>Start</Text>
                </TouchableOpacity>
            </View>

        </View>
               
    );
}
const css = StyleSheet.create({




    border : {
                    borderWidth: 2,         // Thickness of the border
                    borderColor: "red",    // Border color
                    borderRadius: 10,
                    
    },


    button: {
                    backgroundColor: "#1E90FF",
                    paddingVertical: 12,
                    paddingHorizontal: 20,
                    borderRadius: 8,
  },
    buttonText: {     
                    textAlign:"center",
                    width:150,
                    color: "white",
                    fontSize: 16,
                    fontWeight: "bold",
  },

    container: {
                    flex: 1,
                    justifyContent: "space-around",
                    alignItems: "center",
                },

    textColor : {
                    color : "red",
                    fontSize:20,

                },
    imageSet : {
                    width:300,
                    height:300,
                    resizeMode: "contain",
    }



});
export default WelcomeScreen;