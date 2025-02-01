import { LinearGradient } from 'expo-linear-gradient';
import { View, StyleSheet, Text, Alert } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function HomeTransaction() {
  return (
    <View style={styles.container}>
      <View style={styles.screen_one}>
        <View style={styles.twinbox}>
          <View style={styles.box}>
            <Text style={styles.text}>Taux XAF</Text>
            <Text style={styles.textnumber}>6,098</Text>
            <FontAwesome6 name="money-bill-transfer" size={33} color="white"/>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>Taux XOF</Text>
            <Text style={styles.textnumber}>6,098</Text>
            <FontAwesome6 name="money-bill-transfer" size={33} color="white"/>
          </View>
        </View>
      </View>
      

      <View style={styles.screen_two}>
        <View style={styles.onebox}>
            <View style={styles.box}>
              <Text style={styles.text}>Taux XAF</Text>
              <Text style={styles.textnumber}>6,098</Text>
              <FontAwesome6 name="money-bill-transfer" size={33} color="white"/>
            </View>
        </View>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  screen_one: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "rgba(225, 23, 23, 0.9)",
    width:'100%',
    height:'35%',
  },
  screen_two: {
    backgroundColor: "rgba(18, 167, 10, 0.9)",
    width:'100%',
    height:'65%',
  },
  twinbox: {
    flexDirection: "row",
    backgroundColor: "rgb(255, 255, 255)",
  },

  onebox: {
    height:'90%',
    flexDirection: "row",
    backgroundColor: "rgb(255, 255, 255)",
  },
 
  box: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#074B8A",
    width:'50%',
    height:'90%',
    borderRadius: 10,
    overflow: "hidden",
    padding:5,
    margin: 3,
  },

  onlybox: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#074B8A",
    width:'50%',
    height:'80%',
    borderRadius: 10,
    overflow: "hidden",
    padding:5,
    margin: 3,
    
  },
  text: {
    fontSize: 12,
  },
  textnumber: {
    fontSize: 12,
  },
});