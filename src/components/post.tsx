/**
 * Post component
 * Displays an individual post with header, image, actions, and bottom section.
 * Reuses images from the gridImages data and maps them into individual posts.
 * 
 * Usage: <Post />
 */

import { Image, Text, useColorScheme, View } from "react-native";
import { gridImages } from "../data/gridImages";
import { getThemeStyles, styles } from "../data/styles";
import PostHeader from "./postHeader";
import PostActions from "./postActions";

export default function Post() {
  const themeStyles = getThemeStyles(useColorScheme() === "dark");
  return (
    <>
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
    </>
  );
}