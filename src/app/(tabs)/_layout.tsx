import { Stack } from "expo-router";
import { useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../../components/footer";
import { getThemeStyles, styles } from "../../data/styles";

export default function TabsLayout() {
  const themeStyles = getThemeStyles(useColorScheme() === "dark");

  return (
    <SafeAreaView style={[styles.safeArea, themeStyles.background]}>
      <View style={[styles.rootContainer, themeStyles.background]}>
        <Stack screenOptions={{ headerShown: false }} />
        <Footer />
      </View>
    </SafeAreaView>
  );
}
