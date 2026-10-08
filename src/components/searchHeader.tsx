import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, useColorScheme, View } from "react-native";
import { getThemeStyles, styles } from "../data/styles";
import { categories } from "@/data/categories";

export default function SearchHeader() {
  const themeStyles = getThemeStyles(useColorScheme() === "dark");

  return (
    <View>
    <View style={styles.searchBarHeader}>
      <View style={[styles.searchBox, themeStyles.button]}>
        <Ionicons name="search-outline" size={24} color={themeStyles.icon.color} />
        <Text style={themeStyles.secondaryText}>Search</Text>
      </View>
      <Ionicons name="bookmark-outline" size={26} color={themeStyles.icon.color} />
      </View>
    
    {categories.map(category => (
      <View key={category.id}>
        <Text style={themeStyles.secondaryText}>
          {category.text}
        </Text>
    </View>
    ))}
    </View>
  );
}