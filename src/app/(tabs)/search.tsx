import { getThemeStyles, styles } from "@/data/styles";
import { ScrollView, useColorScheme } from "react-native";
import SearchHeader from "../../components/searchHeader";
export default function Search() {
  const themeStyles = getThemeStyles(useColorScheme() === "dark");
  return (
    <ScrollView style={[styles.rootContainer, themeStyles.background]}>
      <SearchHeader />
    </ScrollView>
  );
}
