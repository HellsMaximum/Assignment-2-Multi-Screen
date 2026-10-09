/**
 * Post header component
 * Displays the profile image and username on the left, and a menu icon on the right.
 *
 * Usage: <PostHeader />
 */

import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, useColorScheme, View } from "react-native";
import ProfileImage from "./profileImage";
import { getThemeStyles, styles } from "../data/styles";

export default function PostHeader() {
  const themeStyles = getThemeStyles(useColorScheme() === "dark");

  return (
    <View style={styles.profilePostHeader}>
      {/* Left side of the post header */}
      <View style={styles.profilePostLeftSide}>
        <ProfileImage style={styles.profilePostAvatar} />
        <Text style={themeStyles.primaryText}>dickens_doug</Text>
      </View>

      {/* Right side of the post header */}
      <Ionicons
        name="reorder-three-outline"
        size={30}
        color={themeStyles.icon.color}
      />
    </View>
  );
}
