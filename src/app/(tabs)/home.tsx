import { View } from "react-native";
import HomeHeader from "../../components/homeHeader";
import Stories from "../../components/stories";
import { ScrollView } from "react-native"; 
export default function Home() {
  return (
    <ScrollView>
        {/* Home Header component */}
      <HomeHeader />
      <Stories />
    </ScrollView>
  );
}
