import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen.js";
import UserScreen from "../screens/UserScreen.js";
import SplashScreen from "../screens/SplashScreen.js";
import LoginScreen from "../screens/auth/LoginScreen.js";
import RegisterScreen from "../screens/auth/RegisterScreen.js";

const tab = createBottomTabNavigator();
const stack = createNativeStackNavigator();

const TabNavigator = () => {
  return (
    <tab.Navigator
      inicialroutename="Login"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName === "home-outline";
          } else if (route.name === "User") {
            iconName = "person-outline";
          } 
          

          return (
            <Ionicons name={iconName} size={size} color={color}></Ionicons>
          );
        },
        tabBarActiveTintColor: "#E76A24",
        tabBarInactiveTintColor: "#FFD700",
      })}
    >
      <tab.Screen name="Home" component={HomeScreen} />
      <tab.Screen
        name="User"
        component={UserScreen}
        options={{ title: "USUARIOS" }}
      />
      {/* <tab.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "LOGIN" }}
      /> */}
      {/* <tab.Screen
        name="Register"
        component={RegisterScreen}
        options={{ title: "REGISTER" }}
      /> */}
    </tab.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <stack.Screen
        name="login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <stack.Screen
        name="register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <stack.Screen
        name="main"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </stack.Navigator>
  );
};

export default AppNavigation;
