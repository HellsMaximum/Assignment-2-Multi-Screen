/**
 * Profile Posts page
 * This page is displayed as a stack on top of the profile page
 * to navigate to this page you click on an image from the profile grid.
 *
 * This page displays the profile posts vertically.
 * Each post includes a header, an image, action icons, and a bottom section with text and date.
 *
 */

import PostActions from "@/components/postActions";
import PostStackHeader from "@/components/postStackHeader";
import PostHeader from "@/components/postHeader";
import { Image, ScrollView, Text, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { gridImages } from "../data/gridImages";
import { getThemeStyles, styles } from "../data/styles";

export default function ProfilePosts() {
  const themeStyles = getThemeStyles(useColorScheme() === "dark");

  return (
    <SafeAreaView style={[styles.rootContainer, themeStyles.background]}>
      {/* Header for the page */}
      <PostStackHeader />
      <ScrollView
        style={[styles.profilePostsContainer, themeStyles.background]}
      >
        {gridImages.map((image) => (
          <View key={image.id}>
            {/* Header for each post */}
            <PostHeader />
            <Image source={image.source} style={styles.profilePostPhoto} />

            {/* Post action icons */}
            <PostActions />

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
    </SafeAreaView>
  );
}
