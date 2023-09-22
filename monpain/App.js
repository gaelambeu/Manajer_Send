import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from "tailwind-rn";

export default function App() {
  return (
    <View style={tw("flex-1 justify-center items-center")}>
      <Text style={tw("text-blue-800 font-semibold")}>Hello PAPAFAM 123</Text>
      <StatusBar style="auto" />
    </View>
  );
}


