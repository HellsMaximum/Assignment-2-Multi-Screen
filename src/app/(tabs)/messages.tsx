import { Ionicons } from "@expo/vector-icons";
import { Text, useColorScheme, View } from "react-native";
import MessageHeader from "../../components/messageHeader";
import { getThemeStyles, styles } from "../../data/styles";

export default function Messages() {
  const themeStyles = getThemeStyles(useColorScheme() === "dark");
  return (
    <View style={[styles.rootContainer, themeStyles.background]}>
      <MessageHeader />

      <View style={styles.searchBarHeader}>
        <View style={[styles.searchBox, themeStyles.button]}>
          <Ionicons
            name="search-outline"
            size={24}
            color={themeStyles.icon.color}
          />
          <Text style={themeStyles.secondaryText}>Search</Text>
        </View>
      </View>
    </View>
  );
}
