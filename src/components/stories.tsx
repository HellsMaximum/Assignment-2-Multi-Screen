import { ScrollView, Image } from "react-native";
import { storyImages } from "../data/storyImages";
import { styles } from "../data/styles";

export default function Stories() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {storyImages.map((story) => (
          <Image key={story.id} source={story.source} style={styles.storyImage} />
        ))}
    </ScrollView>
  );
}
