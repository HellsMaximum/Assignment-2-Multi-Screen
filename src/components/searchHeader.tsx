/**
 * Search header component
 * Displays the search bar and a horizontal scrolling list of category chips.
 * 
 * Usage: <SearchHeader />
 */
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, useColorScheme, View, ScrollView } from "react-native";
import { getThemeStyles, styles } from "../data/styles";
import { categories } from "@/data/categories";

export default function SearchHeader() {
  const themeStyles = getThemeStyles(useColorScheme() === "dark");

  return (
    <View>
      <View style={styles.searchBarHeader}>
        <View style={[styles.searchBox, themeStyles.button]}>
          <Ionicons
            name="search-outline"
            size={24}
            color={themeStyles.icon.color}
          />
          <Text style={themeStyles.secondaryText}>Search</Text>
        </View>
        <Ionicons
          name="bookmark-outline"
          size={26}
          color={themeStyles.icon.color}
        />
      </View>

      {/* category chips horizontal scroll view */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={[styles.categoryScrollView, themeStyles.background]}
      >
        {categories.map((category) => (
          <View
            key={category.id}
            style={[styles.categoryChip, themeStyles.button]}
          >
            <Text style={themeStyles.secondaryText}>{category.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
