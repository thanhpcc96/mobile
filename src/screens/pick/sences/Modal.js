import React, { Component } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import Modal from "react-native-modal";
import { Entypo } from "@expo/vector-icons";
import PropTypes from "prop-types";

import { styles } from "./styles/Modal.style";

class ModalPick extends Component {
  static propTypes = {
    isShowModal: PropTypes.bool.isRequired,
    socket: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    hideModal: PropTypes.func.isRequired,
    pickChuyenXe: PropTypes.func.isRequired,
   // disablePick: PropTypes.bool.isRequired
  };
  static defaultProps = {
    data: {
      userid: "",
      idchuyen: "",
      price: 0
    }
  };
  state = {
    tu: "",
    den: "",
    disabledPick: false
  };
  _pickChuyen = () => {
    if (this.state.tu.length === 0 && this.state.den.length === 0) {
      alert("Vui long nhap du diem len va diem xuong");
    } else {
      this.props.pickChuyenXe(
        [...this.props.data, this.state.tu, this.state.den],
        this.props.socket
      );
    }
  };

  render() {
    const { idChuyen } = this.props;
    return (
      <Modal
        isVisible={this.props.isShowModal}
        avoidKeyboard={true}
        backdropColor={"rgba(219, 168, 92, 0.36)"}
        children={
          <View>
            <View style={styles.titleModal}>
              <Text style={styles.titleModalText}> Đăng ký vé</Text>
            </View>
            <View style={styles.modalContent}>
              <View style={styles.commentContainer}>
                <View>
                  <TextInput
                    style={styles.textinput}
                    placeholder={"Điểm lên"}
                    onChangeText={values => this.setState({ tu: values })}
                  />
                  <TextInput
                    style={styles.textinput}
                    placeholder={"Điểm xuống"}
                    onChangeText={values => this.setState({ den: values })}
                  />
                </View>
                <View>
                  <TouchableOpacity
                    style={[
                      styles.commentButton,
                      { paddingLeft: 5, paddingRight: 5 }
                    ]}
                    onPress={() => this._pickChuyen()}
                    disabled={this.props.disablePick}
                  >
                    <Entypo name="forward" color={"#fff"} size={30} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.commentButton,
                      { backgroundColor: "#B0BEC5", marginTop: 10 }
                    ]}
                    onPress={this.props.hideModal}
                  >
                    <Text style={{ color: "#FFF" }}> Hủy</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        }
      />
    );
  }
}

export default ModalPick;
