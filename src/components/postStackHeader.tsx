/**
 * Component holding the header for the profile posts stack page.
 * Displays the back arrow, the title "Posts", and the username "dickens_doug".
 *
 * Usage: <PostStackHeader />
 */
import { Text, useColorScheme, View } from "react-native";
import { getThemeStyles, styles } from "../data/styles";
import StackBackArrow from "./stackBackArrow";

export default function PostStackHeader() {
  const themeStyles = getThemeStyles(useColorScheme() === "dark");
  return (
    <View style={[styles.header, themeStyles.surface]}>
      <View style={styles.headerSide}>
        <StackBackArrow />
      </View>
      <View style={styles.headerCenter}>
        <Text style={[themeStyles.primaryText, styles.headerText]}>Posts</Text>
        <Text style={[themeStyles.secondaryText, styles.headerSubText]}>
          dickens_doug
        </Text>
      </View>
      <View style={styles.headerSide} />
    </View>
  );
}
