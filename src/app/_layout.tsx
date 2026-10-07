import { View } from "react-native";
import { Stack } from "expo-router";
import Footer from "../components/footer";
import { styles } from "../data/styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.rootContainer}>
        <Stack screenOptions={{ headerShown: false }} />
        <Footer />
      </View>
    </SafeAreaView>
  );
}
