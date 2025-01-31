import { View, StyleSheet, TouchableOpacity,ImageBackground, Text } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from "../App"
import { StatusBar } from 'expo-status-bar';



type WelcomeProps = {
  navigation: StackNavigationProp<RootStackParamList, "Welcome">
};


export default function Welcome({navigation} : WelcomeProps) {
  return (
    <View style={styles.container}>
      <StatusBar hidden/>
      <ImageBackground
        style={styles.background}
        source={{uri : "https://i.pinimg.com/736x/62/96/66/629666635af5b6d1e9e40cc96b7e42ad.jpg"}}
        resizeMode="cover"
      >

      <View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("HomeTransaction")}>
          <View style={styles.buttonPreview}>
            <Text style={styles.buttonText}>Faire une Transaction</Text>
          </View>
          <View style={styles.buttonIcon}>
            <FontAwesome6 name="money-bill-transfer" size={33} color="white"/>
          </View>
        </TouchableOpacity>
      </View>
      
      </ImageBackground>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button :{
    flexDirection: "row",
    alignItems: "center",
    marginTop: 550,
  },
  buttonPreview: {
    backgroundColor: "rgba(254, 254, 254, 0.9)",
    padding: 15,
    paddingRight: 3,
    paddingLeft: 5,
    borderTopLeftRadius: 15, 
    borderBottomLeftRadius: 15, 
  },
  buttonText :{
    color: 'black',
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonIcon:{
    backgroundColor: "#064085",
    padding: 10,
    borderTopRightRadius: 15, 
    borderBottomRightRadius: 15, 
  }
});