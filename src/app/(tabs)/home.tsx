/**
 * Home page
 * Displays the home feed with a header, stories, and posts.
 * Reuses the Post component to display individual posts as they are basically the same.
 */

import { getThemeStyles, styles } from "@/data/styles";
import { ScrollView, useColorScheme } from "react-native";
import HomeHeader from "../../components/homeHeader";
import Post from "../../components/post";
import Stories from "../../components/stories";

export default function Home() {
  const themeStyles = getThemeStyles(useColorScheme() === "dark");
  return (
    <ScrollView style={[styles.rootContainer, themeStyles.background]}>
      {/* Home Header component */}
      <HomeHeader />
      {/* Stories component displaying user stories as a horizontal scrollable list */}
      <Stories />
      {/* reusing posts code from the stack because it is basically the same thing */}
      <Post />
    </ScrollView>
  );
}
