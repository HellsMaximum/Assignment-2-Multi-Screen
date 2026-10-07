import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, ScrollView, View } from "react-native";
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
          <Image
            key={image.id}
            source={image.source}
            style={styles.imgGridItem}
          />
        ))}
      </View>
    </ScrollView>
  );
}
