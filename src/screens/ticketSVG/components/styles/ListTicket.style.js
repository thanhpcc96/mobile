import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  root: { flex: 1 },
  scrollviewItem: {
    flexDirection: "row",
    height: 80,
    width: "98%",
    backgroundColor: "#FFF"
  },
  thumb:{
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center"
  },
  scrollviewItemInfo: {
    width: "60%",
    paddingLeft: "3%"
  },
  Title: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  TitleText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#3E3E3E"
  },
  TimeStart: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  price: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  text: {
    color: "#3E3E3E",
    fontSize: 14
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "1%"
  },
  button: {
    backgroundColor: "#19ECDE",
    height: 35,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  textButton: { color: "#FFF" }
});

export default styles;
