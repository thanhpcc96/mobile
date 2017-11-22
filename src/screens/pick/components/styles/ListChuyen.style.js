import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  chuyenxeItem: {
    height: 180,
    width: "96%",
    marginLeft: "2%",
    marginTop: 15,
    //marginVertical: '1.5%',
    backgroundColor: "#EEEEEE",
    borderRadius: 7,
    borderWidth:1,
    borderColor:"#9E9E9E"
  },
  chuyenxeItemTitle: {
    flex: 0.25,
    justifyContent: "center",
    backgroundColor: "blue",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    backgroundColor: "#29B6F6",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  itemTitleText: {
    fontSize: 17,
    color: "#FFF",
    fontWeight: "bold",
    marginLeft: 15
  },
  itemTitleTimer: {
    backgroundColor: "transparent",
    borderRadius: 4,
    justifyContent: "center",
    marginRight: 15,
    paddingVertical: "1%",
    paddingHorizontal: "1%"
  },
  timerText: {
    color: "#0D47A1",
    fontSize: 15,
    fontWeight: "bold"
  },
  cardContainer: {
    flex: 0.75
  },
  cardContent: {
    flex: 4
  },
  lotrinh: {
    flex: 1
  },
  primaryText: {
    color: "#607D8B",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 10
  },
  text: {
    color: "#607D8B",
    marginLeft: 16
  },
  timeXuathanh: {
    flex: 1
  },
  progressContainer: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 10,
    paddingBottom:3
  },
  textProgress: {
    position: "absolute",
    top: 0,
    backgroundColor: "transparent",
    marginLeft: "30%",
    color: "#FFF",
    fontWeight: "bold"
  },
  buttonPick: {
    position: "absolute",
    bottom: 10,
    right: 5
  },
  button: {
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "1.5%",
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 3
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 20
  }
});
export default styles;
