import { createStore, applyMiddleware, compose } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import thunk from "redux-thunk";
import { autoRehydrate } from "redux-persist";
import { createLogger } from "redux-logger";

import reducers from "./reducers";

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
}

export default createStore(
  reducers,
  undefined,
  compose(applyMiddleware(...middlewares), autoRehydrate())
);
