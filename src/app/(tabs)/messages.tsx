import { Ionicons } from "@expo/vector-icons";
import { Text, useColorScheme, View } from "react-native";
import MessageHeader from "../../components/messageHeader";
import { getThemeStyles, styles } from "../../data/styles";
import Stories from "@/components/stories";

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

      <Stories />

      <View style={styles.messageNavigation}>
        <View style={styles.messageNavigationLeft}>
          <Text style={themeStyles.primaryText}>Messages</Text>
          <Ionicons
            name="notifications-outline"
            size={24}
            color={themeStyles.icon.color}
          />
        </View>
        <Text style={themeStyles.primaryText}>Requests</Text>
      </View>

      
    </View>
  );
}
