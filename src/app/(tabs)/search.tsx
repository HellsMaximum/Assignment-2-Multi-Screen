import { getThemeStyles, styles } from "@/data/styles";
import { ScrollView, useColorScheme, View, Image } from "react-native";
import SearchHeader from "../../components/searchHeader";
import { gridImages } from "@/data/gridImages";
export default function Search() {
  const themeStyles = getThemeStyles(useColorScheme() === "dark");
  return (
    <ScrollView style={[styles.rootContainer, themeStyles.background]}>
      {/* search header that contains the search bar and category chips */}
      <SearchHeader />

      {/* image grid of static images */}
      <View style={[styles.imgGrid, styles.imgGridRow, themeStyles.background]}>
        {gridImages.map((image) => (
          <View key={image.id} style={styles.imgGridItem}>
            <Image
              source={image.source}
              style={styles.imgGridPhoto}
              resizeMode="cover"
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
