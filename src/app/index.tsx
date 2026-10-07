/**
 * Index page of the app/profile page
 * This page displays user profile information and content.
 * This page includes the profile header component (ProfileTop).
 * This page also includes a stack navigation for navigating selected pictures within the profile content.
 */

import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, Pressable, ScrollView, useColorScheme, View } from "react-native";
import { useRouter } from "expo-router";
import ProfileTop from "../components/profileTop";
import { gridImages } from "../data/gridImages";
import { getThemeStyles, styles } from "../data/styles";

export default function Index() {
  const router = useRouter();
  const themeStyles = getThemeStyles(useColorScheme() === "dark");

  return (
    <ScrollView style={[styles.scroll, themeStyles.background]}>
      <ProfileTop />
      {/* View that contains the profile navigation */}
      <View style={[styles.profileNavigation, themeStyles.surface, themeStyles.border]}>
        <View
          style={[styles.profileNavSelected, themeStyles.selectedBorder]}
        >
          <Ionicons name="grid-outline" size={24} color={themeStyles.icon.color} />
        </View>
        <Ionicons name="square-outline" size={24} color={themeStyles.icon.color} />
        <Ionicons name="repeat-outline" size={24} color={themeStyles.icon.color} />
        <Ionicons name="person-circle-outline" size={24} color={themeStyles.icon.color} />
      </View>

      {/* View that contains a grid of images for the profile content */}
      <View style={[styles.imgGrid, styles.imgGridRow, themeStyles.background]}>
        {gridImages.map((image) => (
          <Pressable
            key={image.id}
            style={styles.imgGridItem}
            onPress={() =>
              router.push({
                pathname: "/pages/[profilePosts]",
                params: { profilePosts: image.id },
              })
            }
          >
            <Image
              source={image.source}
              style={styles.imgGridPhoto}
              resizeMode="cover"
            />
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}
