import { useColorScheme, View } from "react-native";
import { Stack } from "expo-router";
import Footer from "../components/footer";
import { getThemeStyles, styles } from "../data/styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
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
