import axios from "axios";
import { Platform } from "react-native";

let url;
if (__DEV__) {
  if (Platform.OS !== "ios") {
    url = "http://192.168.0.10:3000/api/v1";
  } else {
    url = "http://localhost:3000/api/v1";
  }
} else {
  url = "https://aws.com/nodeservice/thanhpham/api/v1";
}

axios.defaults.baseURL = url;

class ClientAPI {
  constructor() {
    this.path = `/client/`;
  }
  async postLogin(args) {
    try {
      const res = await axios.post(this.path + "login", { ...args });
      return res;
    } catch (err) {
      throw err;
    }
  }

  async postRegister(args) {
    try {
      const res = await axios.post(this.path + "register", { ...args });
      return res;
    } catch (err) {
      throw err;
    }
  }
}

class UserAPI {
  constructor() {
    this.pathUserAcount = `/user/`;
  }

  async postLogin(args) {
    try {
      const res = await axios.post(this.pathUserAcount + "login", { ...args });
      return res;
    } catch (err) {
        throw err
    }
  }
}

export {
    ClientAPI,
    UserAPI
}
