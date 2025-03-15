import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen.js";
import UserScreen from "../screens/UserScreen.js";
import SplashScreen from "../screens/SplashScreen.js";
import LoginScreen from "../screens/LoginScreen.js";
const tab = createBottomTabNavigator();
const stack = createNativeStackNavigator();

const TabNavigator = () => {
  return (
    <tab.Navigator inicialroutename="Home">
      <tab.Screen name="Home" component={HomeScreen} />
      <tab.Screen name="User" component={UserScreen} options={{title:'USUARIOS'}}/>
      <tab.Screen name="Login" component={LoginScreen} options={{title:'LOGIN'}}/>
      <tab.Screen name="Register" component={RegisterScreen} options={{title:'REGISTER'}}/>
    </tab.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="splash" component={SplashScreen} options={{ headerShown: false }} />
      <stack.Screen name="main" component={TabNavigator} options={{ headerShown: false }} />
    </stack.Navigator>
  );
};

export default AppNavigation;
