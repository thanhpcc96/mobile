import { createStore, applyMiddleware, compose } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import thunk from "redux-thunk";
import createSocketIoMiddleware from "redux-socket.io";
import io from "socket.io-client";
import { autoRehydrate } from "redux-persist";
import { createLogger } from "redux-logger";

import reducers from "./reducers";

let socketURI;
const middlewares = [promiseMiddleware(), thunk];

if (__DEV__) {
  // eslint-disable-line

  middlewares.push(
    createLogger({
      collapsed: true,
      predicate: (getState, { type }) => {
        // List of action type we don't want to log in the console
        const blacklist = ["Navigation/NAVIGATE", "Navigation/BACK"];

        return blacklist.every(i => i !== type);
      }
    })
  );
  socketURI = "http://localhost:3000";
} else {
  socketURI = "https://aws....";
}
const socket = io(socketURI, { jsonp: true });
const socketMiddleware = createSocketIoMiddleware(socket, "server/");

middlewares.push(socketMiddleware);

export default createStore(
  reducers,
  undefined,
  compose(applyMiddleware(...middlewares), autoRehydrate())
);
