/**
 * Header for the Home screen
 * Displays the app name with action icons on the sides
 */

import { Ionicons } from "@expo/vector-icons";
import { Text, useColorScheme, View } from "react-native";
import { getThemeStyles, styles } from "../data/styles";

export default function HomeHeader() {
  const themeStyles = getThemeStyles(useColorScheme() === "dark");

  return (
    <View>
      <View style={[styles.header, themeStyles.surface]}>
        <View style={styles.headerSide}>
          <Ionicons
            name="add-outline"
            size={37}
            color={themeStyles.icon.color}
          />
        </View>
        <View style={styles.headerCenter}>
          <Text style={[styles.headerText, themeStyles.primaryText]}>
            Instagram
          </Text>
        </View>
        <View style={[styles.headerSide, styles.headerRight]}>
          <Ionicons
            name="heart-outline"
            size={30}
            color={themeStyles.icon.color}
          />
        </View>
      </View>
    </View>
  );
}
