/**
 * Back arrow component for stack navigation pages.
 * if executed, it navigates back to the previous page in the stack.
 *
 * Usage: <StackBackArrow />
 */

import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { Pressable } from "react-native";
import { styles } from "../data/styles";

export default function StackBackArrow() {
  const router = useRouter();

  return (
    <Pressable
      accessibilityLabel="Go back"
      accessibilityRole="button"
      onPress={() => router.back()}
      style={styles.stackBackButton}
    >
      <Ionicons name="arrow-back" size={24} />
    </Pressable>
  );
}
