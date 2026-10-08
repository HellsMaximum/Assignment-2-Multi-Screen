import { Tabs } from "expo-router";
import { useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../../components/footer";
import { getThemeStyles, styles } from "../../data/styles";

export default function TabsLayout() {
  const themeStyles = getThemeStyles(useColorScheme() === "dark");

  return (
    <SafeAreaView style={[styles.safeArea, themeStyles.background]}>
      <View style={[styles.rootContainer, themeStyles.background]}>
        <Tabs
          screenOptions={{ headerShown: false }}
          tabBar={() => <Footer />}
        >
          <Tabs.Screen name="index" />
          <Tabs.Screen name="home" />
          <Tabs.Screen name="messages" />
          <Tabs.Screen name="search" />
        </Tabs>
      </View>
    </SafeAreaView>
  );
}
