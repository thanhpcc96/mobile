import React, { Component } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import Modal from "react-native-modal";
import { Entypo } from "@expo/vector-icons";
import PropTypes from "prop-types";

import { styles } from "./Modal.style";

class ModalPick extends Component {
  static propTypes = {
    isShowModalComment: PropTypes.bool.isRequired,
    onBackdropPress: PropTypes.func.isRequired,
    dataChuyen: PropTypes.object.isRequired
  };

  render() {
    const { dataChuyen } = this.props;
    return (
      <Modal
        isVisible={this.props.isShowModalComment}
        avoidKeyboard={true}
        onBackdropPress={this.props.onBackdropPress}
        backdropColor={"transparent"}
        children={
          <View>
            <View style={styles.titleModal}>
              <Text style={styles.titleModalText}>
                {" "}
                Đánh giá chuyến xe {dataChuyen.id}
              </Text>
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
}

export default ModalPick;
