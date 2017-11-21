import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  searchbox: {
    top: 0,
    flexDirection: "row",
    minHeight: 40,
    width: "100%",
    alignItems: "center"
  },
  input: {
    width: "80%",
    paddingLeft: "20%",
    color: "#90A4AE",
    backgroundColor: "#4E94E5"
  },
  searchConatiner: {
    marginTop:5,
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  contentSearch: {
    flex: 0.8,
    borderRadius: 6
  },
  searchButtonContainer: {
    flex: 0.2,
    
  },
  textInput: {
    marginLeft: 15,
    backgroundColor: "#DCEDC8",
    color: "#AB47BC",
    paddingLeft: "2%",
    paddingRight: "2%",
    borderRadius: 10
  },
  pickTime: {
    marginLeft: 15,
    backgroundColor: "#00BCD4",
    paddingLeft: "2%",
    paddingRight: "2%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  dropChuyen: {
    marginLeft: 15,
    backgroundColor: "#FFA726",
    minWidth: "20%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingLeft: "1%",
    paddingRight: "1%"
  },
  btnSearch: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    // marginLeft: 15,
    backgroundColor: "#0277BD",
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingTop: 3,
    paddingBottom: 3,
  }
});

export default styles;
