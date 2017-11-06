import React, { Component } from "react";
import { TextInput, FlatList, TouchableOpacity } from "react-native";
import { SwipeRow, View, Text, Icon, Button, Content } from "native-base";

import ModalComment from "./ModalComent";
import ModalRating from "./ModalRating";

import ListData from "../test";

class ListChuyen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowModalComment: false,
      isShowModalRating: false
    };
  }
  _renderModalComment = () => (
    <ModalComment
      dataChuyen={{ id: "chuyen001" }}
      isShowModalComment={this.state.isShowModalComment}
      onBackdropPress={() => this.setState({ isShowModalComment: false })}
    />
  );

  _setShowModal = typeModal => {
    this.setState({
      isShowModalComment: typeModal === "Comment",
      isShowModalRating: typeModal === "Rating"
    });
  };

  _renderModalRating = () => (
    <ModalRating
      dataChuyen={{ id: "chuyen001" }}
      isShowModalRating={this.state.isShowModalRating}
      onBackdropPress={() => this.setState({ isShowModalRating: false })}
    />
  );

  _renderRow = item => (
    <SwipeRow
      leftOpenValue={75}
      rightOpenValue={-75}
      left={
        <Button primary onPress={() => this._setShowModal("Comment")}>
          <Icon active name="ios-chatboxes-outline" />
        </Button>
      }
      body={
        <View
          style={{
            height: 80,
            width: "90%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text>Chuyen fake {item.key}</Text>
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
        <FlatList
          data={[{ key: "a" }, { key: "b" }]}
          renderItem={({ item }) => {
            console.log(JSON.stringify(item));
            return this._renderRow(item);
          }}
        />
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
