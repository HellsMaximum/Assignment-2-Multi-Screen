/**
 * Profile Posts page
 * This page is displayed as a stack on top of the profile page
 * to navigate to this page you click on an image from the profile grid.
 *
 * This page displays the profile posts vertically.
 * Each post can be scrolled into view.
 */

import ProfileImage from "@/components/profileImage";
import StackBackArrow from "@/components/stackBackArrow";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, ScrollView, Text, useColorScheme, View } from "react-native";
import { gridImages } from "../../data/gridImages";
import { getThemeStyles, styles } from "../../data/styles";

export default function ProfilePosts() {
  const themeStyles = getThemeStyles(useColorScheme() === "dark");

  return (
    <View style={[styles.rootContainer, themeStyles.background]}>
      <View style={[styles.header, themeStyles.surface]}>
        <StackBackArrow />
      </View>

      <ScrollView
        style={[styles.profilePostsContainer, themeStyles.background]}
      >
        {gridImages.map((image) => (
          <View key={image.id}>
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
            <Image source={image.source} style={styles.profilePostPhoto} />
            <Text style={[styles.profilePostBottom, themeStyles.primaryText]}>
              {image.bottomText}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
