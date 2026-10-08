import { Image, ScrollView, Text, useColorScheme, View } from "react-native";
import { storyImages } from "../data/storyImages";
import { getThemeStyles, styles } from "../data/styles";

export default function Stories() {
  const themeStyles = getThemeStyles(useColorScheme() === "dark");

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={getThemeStyles(useColorScheme() === "dark").background}
    >
      {storyImages.map((story) => (
        <View key={story.id} style={styles.storyItem}>
          <Image source={story.source} style={styles.storyImage} />
          <Text style={[styles.storyAccount, themeStyles.primaryText]}>
            {story.account}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}
