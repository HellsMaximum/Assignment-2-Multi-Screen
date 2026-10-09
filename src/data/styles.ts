import { Dimensions, StyleSheet } from "react-native";

const NUM_COLUMNS = 3;
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export function getThemeStyles(isDark: boolean) {
  const colors = isDark
    ? {
        background: "black",
        surface: "black",
        text: "white",
        secondaryText: "lightgray",
        border: "#262626",
        button: "#363636",
      }
    : {
        background: "white",
        surface: "white",
        text: "black",
        secondaryText: "#262626",
        border: "lightgray",
        button: "lightgray",
      };

  return StyleSheet.create({
    background: { backgroundColor: colors.background },
    surface: { backgroundColor: colors.surface },
    primaryText: { color: colors.text },
    secondaryText: { color: colors.secondaryText },
    border: { borderColor: colors.border },
    button: { backgroundColor: colors.button },
    icon: { color: colors.text },
    selectedBorder: { borderBottomColor: colors.text },
  });
}

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
    fontSize: 24,
    fontWeight: "bold",
  },
  headerSubText: {
    fontSize: 12,
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
  storyImage: {
    width: 90,
    height: 90,
    borderRadius: 50,
    margin: 5,
  },
  storyItem: {
    width: 100,
    alignItems: "center",
  },
  storyAccount: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 10,
  },
  searchBarHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 12,
  },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  categoryChip: {
    height: 35,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 4,
    paddingHorizontal: 12,
  },
  categoryScrollView: {
    margin: 8,
  },
  messageNavigation: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 16,
    paddingHorizontal: 12,
  },
  messageNavigationLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  profilePostsContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  stackBackButton: {
    width: 44,
    height: 44,
    justifyContent: "center",
  },
  profilePostHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  profilePostLeftSide: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  profilePostAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profilePostPhoto: {
    width: SCREEN_WIDTH,
    maxHeight: SCREEN_HEIGHT / 2,
    aspectRatio: 1,
    resizeMode: "cover",
  },
  profilePostActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  profilePostActionGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  profilePostBottom: {
    padding: 12,
  },
  profilePostDate: {
    fontSize: 12,
    marginTop: 4,
  },
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
  accountNameText: {
    fontWeight: "bold",
  },
});
