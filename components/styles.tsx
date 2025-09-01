import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  header2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  startQuiz: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSpread: {
    flex: 1,
  },
  trueFalse: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  prevNext: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cheat: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    backgroundColor: "rgba(217, 119, 6, 1)",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    width: 125,
    height: 60,
  },
});

export default styles;
