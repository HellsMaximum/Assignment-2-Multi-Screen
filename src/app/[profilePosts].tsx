/**
 * Profile Posts page
 * This page is displayed as a stack on top of the profile page
 * to navigate to this page you click on an image from the profile grid.
 *
 * This page displays the profile posts vertically.
 * Each post includes a header, an image, action icons, and a bottom section with text and date.
 */

import Post from "@/components/post";
import PostStackHeader from "@/components/postStackHeader";
import { ScrollView, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getThemeStyles, styles } from "../data/styles";

export default function ProfilePosts() {
  const themeStyles = getThemeStyles(useColorScheme() === "dark");

  return (
    <SafeAreaView style={[styles.rootContainer, themeStyles.background]}>
      {/* Header for the page */}
      <PostStackHeader />
      <ScrollView style={[styles.profilePostsContainer, themeStyles.background]}>
        {/* Profile posts are displayed here using the Post component */}
        <Post />
      </ScrollView>
    </SafeAreaView>
  );
}
