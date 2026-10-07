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
        <View style={styles.headerSide}>
          <StackBackArrow />
        </View>
        <View style={styles.headerCenter}>
          <Text style={[themeStyles.primaryText, styles.headerText]}>
            Posts
          </Text>
          <Text style={[themeStyles.secondaryText, styles.headerSubText]}>
            dickens_doug
          </Text>
        </View>
        <View style={styles.headerSide} />
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

            {/* View containing 5 icons the first 4 are beside eachother on the left and the last one is by itself on the right */}
            <View style={styles.profilePostActions}>
              <View style={styles.profilePostActionGroup}>
                <Ionicons name="heart-outline" size={30} color={themeStyles.icon.color} />
                <Ionicons name="chatbubble-outline" size={30} color={themeStyles.icon.color} />
                <Ionicons name="repeat-outline" size={30} color={themeStyles.icon.color} />
                <Ionicons name="share-outline" size={30} color={themeStyles.icon.color} />
              </View>

              <View>
                <Ionicons name="bookmark-outline" size={30} color={themeStyles.icon.color} />
              </View>
            </View>

            <View style={styles.profilePostBottom}>
              <Text style={themeStyles.primaryText}>
                <Text style={styles.accountNameText}>dickens_doug </Text>
                {image.bottomText}
              </Text>
              <Text style={[themeStyles.secondaryText, styles.profilePostDate]}>
                {image.dates}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
