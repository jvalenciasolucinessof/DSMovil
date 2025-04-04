import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./src/navigation/AppNavigation.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./src/context/AuthContext.js";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const queryClient = new QueryClient();
export default function App() {
  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <NavigationContainer>
            <AppNavigation />
          </NavigationContainer>
        </AuthProvider>
      </QueryClientProvider>

    </GestureHandlerRootView>
  );
}
