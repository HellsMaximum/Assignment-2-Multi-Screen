/**
 * Footer component containing navigation throughout the app
 * This provides quick access to the main sections of the app.
 * Reused on every page because instagram has a consistent bottom navigation bar.
 * 
 * Usage: <Footer />
 */

import { Pressable, useColorScheme, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { getThemeStyles, styles } from "../data/styles";

export default function Footer() {
  const router = useRouter();
  const themeStyles = getThemeStyles(useColorScheme() === "dark");

  return (
    <View style={[styles.nav, themeStyles.surface, themeStyles.border]}>
      <Pressable
        accessibilityLabel="Home"
        accessibilityRole="button"
        onPress={() => router.navigate("/home")}
      >
        <Ionicons name="home-outline" size={24} color={themeStyles.icon.color} />
      </Pressable>

      {/* This navigates nowhere for now mainly because the screen is to basic to make*/}
      <Ionicons name="square-outline" size={24} color={themeStyles.icon.color} />
      
      <Pressable
        accessibilityLabel="Messages"
        accessibilityRole="button"
        onPress={() => router.navigate("/messages")}
      >
        <Ionicons name="planet-outline" size={24} color={themeStyles.icon.color} />
      </Pressable>
      <Pressable
        accessibilityLabel="Search"
        accessibilityRole="button"
        onPress={() => router.navigate("/search")}
      >
        <Ionicons name="search-outline" size={24} color={themeStyles.icon.color} />
      </Pressable>
      <Pressable
        accessibilityLabel="Profile"
        accessibilityRole="button"
        onPress={() => router.navigate("/")}
      >
        <Ionicons name="person" size={24} color={themeStyles.icon.color} />
      </Pressable>
    </View>
  );
}
