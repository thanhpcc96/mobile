/*eslint-disable */
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Field, reduxForm } from "redux-form";
import { Button } from "react-native-elements";

import { loginValidation } from "../validation";
import TextInputWithValidations from "../../../common/TextInputWithValidations";

const FormLogin = ({
  submitLogin,
  handleSubmit,
  gotoRegister,
  gotoForgot,
  invalid,
  submitting
}) => (
  <View style={styles.formController}>
    <Field
      component={TextInputWithValidations}
      name="email"
      label="Email"
      selectionColor={"#8FE2F0"}
      containerStyle={styles.item}
    />
    <Field
      component={TextInputWithValidations}
      name="password"
      label="Email"
      secureTextEntry={true}
      selectionColor={"#8FE2F0"}
      containerStyle={styles.item}
    />
    <View style={styles.formButton}>
      <Button
        backgroundColor={"#4E94E5"}
        title="Đăng nhập"
        raised
        disabled={invalid || submitting}
        onPress={handleSubmit(submitLogin)}
      />
      <Button
        backgroundColor={"rgba(253,255,255,0.5)"}
        title="Đăng ký"
        raised
        onPress={gotoRegister}
      />
      <Text style={styles.forgotText} onPress={gotoForgot}>
        Quên mật khẩu? Khôi phục ngay
      </Text>
    </View>
  </View>
);

export default reduxForm({
  form: "login",
  validate: loginValidation
})(FormLogin);

const styles = StyleSheet.create({
  formController: {

    width: "80%"
  },
  item: {
    marginVertical: "2%"
  },
  formButton: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "10%"
  },
  forgotText: {
    //fontWeight: "Underline",
    color: "#FFF",
    fontSize: 18
  }
});
