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

      <View style={styles.overlay}>
        <View style={styles.overtitle}>
          <Text style={styles.accueiltext}>Bienvenue</Text>
          <Text style={styles.surtext}>sur</Text>

          <View style={styles.overname}>
           <Text style={styles.namemanajer}>MANJER</Text>
           <Text style={styles.namesend}>SEND</Text>
          </View>
        </View>


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
  },
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    width: '100%',
    height: '100%',
  },

  overtitle :{
    marginTop: 70,
    paddingTop: 80,
    fontSize: 50,
    fontStyle: "normal",
    fontWeight: "900",
    //backgroundColor: "rgba(159, 22, 22, 0.5)",
  },

  accueiltext :{
    fontSize: 50,
    fontStyle: "normal",
    marginLeft: 20,
    fontWeight: "900",
    color: "white",
    //backgroundColor: "rgba(22, 56, 159, 0.5)",
  },
  surtext :{
    paddingTop: 5,
    fontSize: 50,
    fontStyle: "normal",
    fontWeight: "700",
    marginLeft: 95,
    color: "#064085",
    //backgroundColor: "rgba(240, 228, 228, 0.5)",
  },

  
  overname :{
    padding: 10,
    flexDirection: "row",
    //backgroundColor: "rgba(159, 22, 22, 0.5)",
    marginTop: 20,
  },

  namemanajer :{
    fontSize: 60,
    fontStyle: "normal",
    fontWeight: "900",
    color: "white",
    //backgroundColor: "rgba(159, 22, 22, 0.5)",
  },
  namesend :{
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "600",
    //backgroundColor: "rgba(251, 250, 250, 0.5)",
    color: "#064085"
  },


  button :{
    flexDirection: "row",
    alignItems: "center",
    marginTop: 170,
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