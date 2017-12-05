import { Permissions, Notifications } from "expo";
import * as firebase from "firebase";
import { ClientAPI, setAuthHeader } from "./api";

firebase.initializeApp({
  apiKey: "AIzaSyBqppz2JJrVw9J9nxjzu6Zr9mWP9wH8D7M",
  authDomain: "react-redux-87355.firebaseapp.com",
  databaseURL: "https://react-redux-87355.firebaseio.com",
  projectId: "react-redux-87355",
  storageBucket: "react-redux-87355.appspot.com",
  messagingSenderId: "406010036753"
});

export default (async function registerForPushNotificationsAsync(idclient) {
  // Android remote notification permissions are granted during the app
  // install, so this will only ask on iOS
  let { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

  // Stop here if the user did not grant permissions
  if (status !== "granted") {
    return;
  }
  // Get the token that uniquely identifies this device
  const token = await Notifications.getExpoPushTokenAsync();

  console.log("================token====================");
  console.log(token);
  console.log("====================================");

  return fetch("http://192.168.0.10:3000/api/v1/client/updatepush", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      token: {
        value: token
      },
      idclient: {
        value: idclient
      }
    })
  });
});
