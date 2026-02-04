import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },

  header: {
    height: 56,
    backgroundColor: "#1186c1",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },

  menuIcon: {
    width: 24,
    height: 24,
    tintColor: "#fff",
  },

  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },

  welcomeContainer: {
    padding: 20,
  },

  welcomeText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#333",
  },

  subText: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },

  cardText: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },
});
export default styles