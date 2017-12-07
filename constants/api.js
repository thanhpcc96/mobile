import axios from "axios";
import { Platform } from "react-native";

let url;
if (__DEV__) {
  if (Platform.OS !== "ios") {
    url = "http://192.168.0.10:3000/api/v1";
  } else {
    url = "http://192.168.0.10:3000/api/v1";
  }
} else {
  url = "http://192.168.0.10:3000/api/v1";
}

axios.defaults.baseURL = url;
export function setAuthHeader(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}

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
  async postTokenPush(args) {
    try {
      const res = await axios.post(this.path + "updatepush", { ...args });
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
  async getInfoProfile() {
    try {
      const res = await axios.get(`${this.path}profile`);
      return res;
    } catch (err) {
      return err;
    }
  }
  async getTicketAvaible() {
    try {
      const res = await axios.get(`${this.path}interact/ticket_avaible`);
      return res;
    } catch (err) {
      throw err;
    }
  }
  async getTicketInfo(id) {
    try {
      const res = await axios.get(`${this.path}interact/ticket/${id}`);
      return res;
    } catch (err) {
      throw err;
    }
  }
  async loadHistoryPayMent() {
    try {
      const res = await axios.get(`${this.path}interact/history`);
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
      throw err;
    }
  }
  async getInfoVe(id) {
    try {
      const res = await axios.post("/manager/ticket/info/id", {
        mave: id.toString()
      });
      return res;
    } catch (error) {
      throw error;
    }
  }
  async getInfoProfile() {
    try {
      const res = await axios.get(this.pathUserAcount + "profile");
      return res;
    } catch (err) {
      throw err;
    }
  }
  async postXeVe(id) {
    try {
      const res = await axios.post("/manager/ticket/xeve", { mave: id });
      return res;
    } catch (error) {
      throw error;
    }
  }
  async postToGetInfoClient(email) {
    try {
      const res = await axios.post("/manager/client/info", { email });
      return res;
    } catch (error) {
      throw error;
    }
  }
  async postNaptien(params) {
    try {
      const res = await axios.post("/manager/client/rechair", { ...params });
      return res;
    } catch (error) {
      throw error;
    }
  }
}

export { ClientAPI, UserAPI };
