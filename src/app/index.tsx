/**
 * Index page of the app/profile page
 * This page displays user profile information and content.
 * This page includes the profile header component (ProfileTop).
 * This page also includes a stack navigation for navigating selected pictures within the profile content.
 */

import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, Pressable, ScrollView, View } from "react-native";
import { Link } from "expo-router";
import ProfileTop from "../components/profileTop";
import { gridImages } from "../data/gridImages";
import { styles } from "../data/styles";

export default function Index() {
  return (
    <ScrollView style={styles.scroll}>
      <ProfileTop />
      {/* View that contains the profile navigation */}
      <View style={styles.profileNavigation}>
        <View style={styles.profileNavSelected}>
          <Ionicons name="grid-outline" size={24} />
        </View>
        <Ionicons name="square-outline" size={24} />
        <Ionicons name="repeat-outline" size={24} />
        <Ionicons name="person-circle-outline" size={24} />
      </View>

      {/* View that contains a grid of images for the profile content */}
      <View style={[styles.imgGrid, styles.imgGridRow]}>
        {gridImages.map((image) => (
          <Link
            key={image.id}
            href={{ pathname: "/pages/profileImages", params: { id: image.id } }}
            asChild
          >
            <Pressable style={styles.imgGridItem}>
              <Image source={image.source} style={styles.imgGridPhoto} />
            </Pressable>
          </Link>
        ))}
      </View>
    </ScrollView>
  );
}
