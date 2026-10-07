import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { gridImages } from "../data/gridImages";

const NUM_COLUMNS = 3;

export default function Index() {
  return (
    // set the safe area so there isn't overlap default system elements
    <SafeAreaView style={styles.safeArea}>
      {/* Set the scrollable content area which will contain most of the main content of the screen */}
      <ScrollView style={styles.scroll}>
        {/* View that contains the header */}
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

        {/* View that contains the upper profile section */}
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
                <Text style={styles.profileStatNumber}>
                  {gridImages.length}
                </Text>
                <Text>Posts</Text>
              </View>
              <View style={styles.profileStat}>
                <Text style={styles.profileStatNumber}>131</Text>
                <Text>Followers</Text>
              </View>
              <View style={styles.profileStat}>
                <Text style={styles.profileStatNumber}>288</Text>
                <Text>Following</Text>
              </View>
            </View>
          </View>

          {/* View containing the profile bio */}
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

        {/* View that contains the profile navigation */}
        <View style={styles.profileNavigation}>
          <View style={styles.profileNavSelected}>
            <Ionicons name="grid-outline" size={24} />
          </View>
          <Ionicons name="square-outline" size={24} />
          <Ionicons name="repeat-outline" size={24} />
          <Ionicons name="person-circle-outline" size={24} />
        </View>

        {/* View that contains a grid of images for the profile content */}
        <View style={[styles.imgGrid, styles.imgGridRow]}>
          {gridImages.map((image) => (
            <Image
              key={image.id}
              source={image.source}
              style={styles.imgGridItem}
            />
          ))}
        </View>
      </ScrollView>

      {/* View that contains the footer nav elements (none are functional and only visual)*/}
      <View style={styles.nav}>
        <Ionicons name="home-outline" size={24} />
        <Ionicons name="square-outline" size={24} />
        <Ionicons name="planet-outline" size={24} />
        <Ionicons name="search-outline" size={24} />
        <Ionicons name="person" size={24} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    height: 50,
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 12,
  },
  headerSide: {
    flex: 1,
  },
  headerCenter: {
    flex: 2,
    alignItems: "center",
  },
  headerRight: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 12,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  scroll: {
    paddingBottom: 32,
    backgroundColor: "white",
  },
  profile: {
    minHeight: 220,
    backgroundColor: "white",
    padding: 16,
  },
  profileTopRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileStats: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: 16,
  },
  profileStat: {
    alignItems: "center",
  },
  profileStatNumber: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profileBio: {
    marginTop: 12,
  },
  profileButtonRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: "auto",
  },
  profileButton: {
    flex: 1,
    backgroundColor: "lightgray",
    borderRadius: 6,
    padding: 8,
  },
  profileButtonText: {
    textAlign: "center",
  },
  nav: {
    borderTopWidth: 1,
    borderTopColor: "lightgray",
    height: 50,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  profileNavigation: {
    height: 55,
    paddingHorizontal: 40,
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    flexDirection: "row",
  },
  imgGrid: {
    flex: 1,
    backgroundColor: "white",
  },
  imgGridRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  imgGridItem: {
    width: `${100 / NUM_COLUMNS}%`,
    aspectRatio: 0.75,
    padding: 1,
  },
  // Add a black border to the bottom to show that it is what the user has selected
  profileNavSelected: {
    height: "100%",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },
  profileImage: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
});
