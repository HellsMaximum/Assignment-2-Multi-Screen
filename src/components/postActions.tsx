/**
 * Component holding the action icons for a post.
 * Displays the like, comment, repost, share, and bookmark icons.
 * Currently each button is static but the code for each button could go in here
 *
 * Usage: <PostActions />
 */

import Ionicons from "@expo/vector-icons/Ionicons";
import { useColorScheme, View } from "react-native";
import { getThemeStyles, styles } from "../data/styles";

export default function PostActions() {
  const themeStyles = getThemeStyles(useColorScheme() === "dark");

  return (
    <View style={styles.profilePostActions}>
      <View style={styles.profilePostActionGroup}>
        <Ionicons
          name="heart-outline"
          size={30}
          color={themeStyles.icon.color}
        />
        <Ionicons
          name="chatbubble-outline"
          size={30}
          color={themeStyles.icon.color}
        />
        <Ionicons
          name="repeat-outline"
          size={30}
          color={themeStyles.icon.color}
        />
        <Ionicons
          name="share-outline"
          size={30}
          color={themeStyles.icon.color}
        />
      </View>

      <View>
        <Ionicons
          name="bookmark-outline"
          size={30}
          color={themeStyles.icon.color}
        />
      </View>
    </View>
  );
}
