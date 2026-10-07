/**
 * Footer component containing navigation throughout the app
 * This provides quick access to the main sections of the app.
 * Reused on every page because instagram has a consistent bottom navigation bar.
 * 
 * Usage: <Footer />
 */

import { useColorScheme, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getThemeStyles, styles } from "../data/styles";

export default function Footer() {
  const themeStyles = getThemeStyles(useColorScheme() === "dark");

  return (
    <View style={[styles.nav, themeStyles.surface, themeStyles.border]}>
      <Ionicons name="home-outline" size={24} color={themeStyles.icon.color} />
      <Ionicons name="square-outline" size={24} color={themeStyles.icon.color} />
      <Ionicons name="planet-outline" size={24} color={themeStyles.icon.color} />
      <Ionicons name="search-outline" size={24} color={themeStyles.icon.color} />
      <Ionicons name="person" size={24} color={themeStyles.icon.color} />
    </View>
  );
}
