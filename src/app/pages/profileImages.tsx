/**
 * Profile Images page
 * This page is displayed as a stack on top of the profile image page
 * to navigate to this page you click on a image from the profile images grid.
 *
 * This page displays all the images from the profile image grid vertically.
 * Each image is the same size as the others and can be scrolled into view.
 */

import { Image, ScrollView } from "react-native";
import { gridImages } from "../../data/gridImages";
import { styles } from "../../data/styles";

export default function ProfileImages() {
  return (
    <ScrollView
      style={styles.profileImagesContainer}
    >
      {gridImages.map((image) => (
        <Image
          key={image.id}
          source={image.source}
          style={styles.profileImagesPhoto}
        />
      ))}
    </ScrollView>
  );
}
