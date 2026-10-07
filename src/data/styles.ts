import { Dimensions, StyleSheet } from "react-native";

const NUM_COLUMNS = 3;
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
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
  imgGridPhoto: {
    width: "100%",
    height: "100%",
  },
  profileImagesContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  profileImagesBackButton: {
    width: 44,
    height: 44,
    justifyContent: "center",
  },
  profileImagesPhoto: {
    width: SCREEN_WIDTH,
    maxHeight: SCREEN_HEIGHT / 2,
    aspectRatio: 1,
    resizeMode: "cover",
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
