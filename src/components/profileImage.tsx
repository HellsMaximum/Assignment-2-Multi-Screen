/**
 * This component renders the profile image for the user.
 * Making it a component allows for easy and consistent use throughout the app.
 * Usage: <ProfileImage />
 */

import { Image, ImageStyle, StyleProp } from "react-native";
import { styles } from "../data/styles";

type ProfileImageProps = {
  style?: StyleProp<ImageStyle>;
};

export default function ProfileImage({ style }: ProfileImageProps) {
  return (
    <Image
      source={require("../../assets/images/img4.jpg")}
      style={[styles.profileImage, style]}
    />
  );
}
