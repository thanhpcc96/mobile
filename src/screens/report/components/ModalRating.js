import React, { Component } from "react";
import { View, Text } from "react-native";
import Modal from "react-native-modal";
import { Rating } from "react-native-elements";
import PropTypes from "prop-types";
import { styles } from "./Modal.style";

class ModalRating extends Component {
  static propTypes = {
    isShowModalRating: PropTypes.bool.isRequired,
    onBackdropPress: PropTypes.func.isRequired,
    dataChuyen: PropTypes.object.isRequired
  };
  render() {
    const { dataChuyen } = this.props;
    return (
      <Modal
        isVisible={this.props.isShowModalRating}
        onBackdropPress={this.props.onBackdropPress}
        backdropColor={"transparent"}
        children={
          <View>
            <View style={styles.titleModal}>
              <Text style={styles.titleModalText}>
                Vote chuyen xe {dataChuyen.idChuyen}
              </Text>
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
}
export default ModalRating;
