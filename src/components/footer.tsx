/**
 * Footer component containing navigation throughout the app
 * This provides quick access to the main sections of the app.
 * Reused on every page because instagram has a consistent bottom navigation bar.
 */

import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../data/styles";

export default function Footer() {
  return (
    <View style={styles.nav}>
      <Ionicons name="home-outline" size={24} />
      <Ionicons name="square-outline" size={24} />
      <Ionicons name="planet-outline" size={24} />
      <Ionicons name="search-outline" size={24} />
      <Ionicons name="person" size={24} />
    </View>
  );
}
