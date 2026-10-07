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
import { Image, ScrollView, View, Text } from "react-native";
import { gridImages } from "../../data/gridImages";
import { styles } from "../../data/styles";

export default function ProfilePosts() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.header}>
        <StackBackArrow />
      </View>

      <ScrollView style={styles.profilePostsContainer}>
        {gridImages.map((image) => (
          <View key={image.id}>
            <View style={styles.profilePostHeader}>
              <ProfileImage />
              <Text>dickens_doug</Text>
            </View>
            <Image source={image.source} style={styles.profilePostPhoto} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
