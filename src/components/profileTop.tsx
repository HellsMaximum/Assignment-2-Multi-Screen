/**
 * Because each page of instagram has such different headers and layouts
 * I decided to create seperate components for the headers of each page as needed.
 * Because of this decision I am also able to combine more then just the header into one component.
 * This component includes the profile header, profile stats, bio, and action buttons.
 * or just the top of the profile page.
 * 
 * This could be reused on multiple profile pages if I was makeing instagram fully.
 * 
 * Usage: <ProfileTop />
 */


import { Pressable, View, Text, Image, Alert } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { gridImages } from "../data/gridImages";
import { styles } from "../data/styles";

export default function ProfileTop() {
  return (
    <View>
      <View style={styles.header}>
        {/* left side of the header */}
        <View style={styles.headerSide}>
          <Ionicons name="add-outline" size={37} />
        </View>
        {/* center of the header */}
        <View style={styles.headerCenter}>
          <Text style={styles.headerText}>dickens_doug</Text>
        </View>
        {/* right side of the header */}
        <View style={[styles.headerSide, styles.headerRight]}>
          <Ionicons name="notifications-outline" size={30} />
          <Ionicons name="menu-outline" size={30} />
        </View>
      </View>

      <View style={styles.profile}>
        {/* View for the top row containing the profile picture and the profile stats beside it */}
        <View style={styles.profileTopRow}>
          <Image
            source={require("../../assets/images/img4.jpg")}
            style={styles.profileImage}
          />
          {/* View containing specific stats about the profile (posts, following, followers) */}
          <View style={styles.profileStats}>
            <View style={styles.profileStat}>
              {/* dynamically change the post display number based on how many images there are in the image grid */}
              <Text style={styles.profileStatNumber}>{gridImages.length}</Text>
              <Text>Posts</Text>
            </View>
            <View style={styles.profileStat}>
              <Text style={styles.profileStatNumber}>131</Text>
              <Text>Followers</Text>
            </View>
            <View style={styles.profileStat}>
              <Text style={styles.profileStatNumber}>291</Text>
              <Text>Following</Text>
            </View>
          </View>
        </View>

        {/* Profile bio section*/}
        <View style={styles.profileBio}>
          <Text>
            The call of the void is the mind's way of appreciating life
          </Text>
        </View>

        {/* View containing two buttons that say "alert" when pressed a pop up shows up saying "alert button pressed" */}
        <View style={styles.profileButtonRow}>
          <Pressable
            onPress={() => {
              Alert.alert("Alert button pressed");
            }}
            style={styles.profileButton}
          >
            <Text style={styles.profileButtonText}>Alert!</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              Alert.alert("Alert button 2 pressed");
            }}
            style={styles.profileButton}
          >
            <Text style={styles.profileButtonText}>Alert x2!</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
