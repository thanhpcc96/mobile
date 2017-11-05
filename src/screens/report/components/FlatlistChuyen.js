import React, { Component } from "react";
import { TextInput, FlatList, TouchableOpacity } from "react-native";
import { SwipeRow, View, Text, Icon, Button, Content } from "native-base";
import Modal from "react-native-modal";
import { Rating } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
class ListChuyen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowModalComment: false,
      isShowModalRating: false
    };
  }
  _renderModalComment() {
    return (
      <Modal
        isVisible={this.state.isShowModalComment}
        avoidKeyboard={true}
        onBackdropPress={() => this.setState({ isShowModalComment: false })}
        backdropColor={"transparent"}
        children={
          <View>
            <View style={styles.titleModal}>
              <Text style={styles.titleModalText}>Comment!</Text>
            </View>
            <View style={styles.modalContent}>
              <View style={styles.commentContainer}>
                <TextInput
                  multiline={true}
                  style={styles.textinput}
                  placeholder={"Xin nhập ý kiến"}
                />
                <TouchableOpacity style={styles.commentButton}>
                  <Entypo name="forward" color={"#fff"} size={30} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        }
      />
    );
  }
  _renderModalRating() {
    return (
      <Modal
        isVisible={this.state.isShowModalRating}
        onBackdropPress={() => this.setState({ isShowModalRating: false })}
        backdropColor={"transparent"}
        children={
          <View>
            <View style={styles.titleModal}>
              <Text style={styles.titleModalText}>Vote chuyen xe</Text>
            </View>
            <View style={styles.modalContent}>
              <Rating
                showRating
                type="star"
                fractions={1}
                startingValue={3.6}
                imageSize={40}
              />
            </View>
          </View>
        }
      />
    );
  }
  _setShowModal = typeModal => {
    this.setState({
      isShowModalComment: typeModal === "Comment",
      isShowModalRating: typeModal === "Rating"
    });
  };
  _renderRow = () => (
    <SwipeRow
      leftOpenValue={75}
      rightOpenValue={-75}
      left={
        <Button primary onPress={() => this._setShowModal("Comment")}>
          <Icon active name="ios-chatboxes-outline" />
        </Button>
      }
      body={
        <View>
          <Text>SwipeRow Body Text 2</Text>
        </View>
      }
      right={
        <Button warning onPress={() => this._setShowModal("Rating")}>
          <Icon active name="ios-heart" />
        </Button>
      }
    />
  );

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Content scrollEnabled={false}>{this._renderRow()}</Content>
        {this._renderModalComment()}
        {this._renderModalRating()}
      </View>
    );
  }
}
const styles = {
  root: {
    borderWidth: 1,
    borderColor: "#EEEEEE"
  },
  titleModal: {
    height: 60,
    minWidth: "85%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#29B6F6",
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4
  },
  titleModalText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#FFF"
  },
  modalContent: {
    minHeight: 130,
    minWidth: "85%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4
  },
  commentContainer: {
    minHeight: 60,
    flexDirection: "row",
    minWidth: "70%",
    justifyContent: "center",
    alignItems: "center"
  },
  textinput: {
    backgroundColor: "#BBDEFB",
    fontSize: 17,
    minWidth: "60%",
    minHeight: 70,
    paddingLeft: 5
  },
  commentButton: {
    backgroundColor: "#1976D2",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 6,
    paddingLeft: 3,
    paddingRight: 3,
    borderRadius: 4
  }
};
export default ListChuyen;
