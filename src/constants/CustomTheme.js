import { DefaultTheme } from "@react-navigation/native";
import color from "./color";
import { StyleSheet } from "react-native";

const CustomTheme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.colors,
    background: color.primary2,
    card: color.accent,
    text: color.text,
    border: color.variant,
  },
  fonts: {
    main: "Saiyan Sans, sans-serif", // Custom Dragon Ball font
    secondary: "Arial, sans-serif",
  },
  sizes: {
    small: "12px",
    medium: "16px",
    large: "24px",
    xlarge: "32px",
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
    xlarge: "32px",
  },
  borderRadius: {
    small: "4px",
    medium: "8px",
    large: "12px",
  },
};

export const globalStyles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    paddingTop: 200,
    alignItems: "center",
    backgroundColor: color.backgroud,
  },
  containerDashboard: {
    flex: 1,
    backgroundColor: color.backgroud,
    alignItems: "center",
  },
});

export default CustomTheme;
