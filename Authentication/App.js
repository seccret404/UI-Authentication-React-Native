import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from "./components/Login";
import Register from "./components/Register";
const Stack = createNativeStackNavigator();

export default  function App(){
  return(
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login"component={Login} options={{headerShown:false}} />
          <Stack.Screen name="Register"component={Register} options={{headerShown:false}} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}