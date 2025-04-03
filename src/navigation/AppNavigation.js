import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import SplashScreen from "../screens/SplashScreen.js";
import LoginScreen from "../screens/auth/LoginScreen.js";
import RegisterScreen from "../screens/auth/RegisterScreen.js";
import DashboardScreen from "../screens/DashboardScreen.js";
import MoviesScreen from "../screens/movies/MoviesScreen.js";
import color from "../constants/color.js";
import { useNavigation } from "@react-navigation/native";
import CustomScreen from "../screens/auth/CustomScreen.js";
const stack = createNativeStackNavigator();
const AppNavigation = () => {
  const navigation = useNavigation();
  return (
    <stack.Navigator>
      <stack.Screen name="splash" component={SplashScreen} options={{ headerShown: false }} />
      <stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
      <stack.Screen name="register" component={RegisterScreen} options={{ headerShown: false }} />
      <stack.Screen name="dashboard" component={DashboardScreen} 
      options={{
          headerTitle: '',
          headerRight: () => (
            <Ionicons name="person-outline" size={24} color={color.primary2} style={{ marginLeft: 15 }} onPress={() => navigation.navigate('custom')} />
          )
        }}
      />
      <stack.Screen name="movies" component={MoviesScreen} options={{ headerShown: false }} />
      <stack.Screen name="custom" component={CustomScreen} options={{ headerShown: false }} />
    </stack.Navigator>
  );
};

export default AppNavigation;
