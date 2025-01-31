import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "./screens/Welcome"
import HomeTransaction from "./screens/HomeTransaction"


export type RootStackParamList = {
  Welcome: undefined,
  HomeTransaction: undefined,
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false}}/>
          <Stack.Screen name="HomeTransaction" component={HomeTransaction} options={{ headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;