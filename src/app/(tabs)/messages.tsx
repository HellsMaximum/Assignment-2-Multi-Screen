import { Ionicons } from "@expo/vector-icons";
import { Text, useColorScheme, View, Image, ScrollView } from "react-native";
import MessageHeader from "../../components/messageHeader";
import { getThemeStyles, styles } from "../../data/styles";
import Stories from "@/components/stories";
import { messages } from "@/data/messages";

export default function Messages() {
  const themeStyles = getThemeStyles(useColorScheme() === "dark");
  return (
    <View style={[styles.rootContainer, themeStyles.background]}>
      <MessageHeader />
      <ScrollView>
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

      {messages.map((image) => (
        <View key={image.id} style={styles.messageImageItem}>
          <Image
            source={image.source}
            style={styles.profileImage}
            resizeMode="cover"
          />
          <View>
          <Text style={themeStyles.primaryText}>{image.account}</Text>
          <Text style={themeStyles.secondaryText}>{image.notification}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
    </View>
  );
}
