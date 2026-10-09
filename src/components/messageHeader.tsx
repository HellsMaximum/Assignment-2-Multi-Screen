/**
 * Message header component
 * Displays the header for the message screen, including the username and an edit icon.
 * 
 * Usage: <MessageHeader />
 */

import { Ionicons } from "@expo/vector-icons";
import { Text, useColorScheme, View } from "react-native";
import { getThemeStyles, styles } from "../data/styles";

export default function MessageHeader() {
  const themeStyles = getThemeStyles(useColorScheme() === "dark");
  return (
    <View style={[styles.header, themeStyles.background]}>
      <View style={styles.headerSide} />
      <View style={styles.headerCenter}>
        <Text style={[styles.headerText, themeStyles.primaryText]}>
          dickens_doug
        </Text>
      </View>
      <View style={[styles.headerSide, styles.headerRight]}>
        <Ionicons
          name="create-outline"
          size={30}
          color={themeStyles.icon.color}
        />
      </View>
    </View>
  );
}
