import Expo, { AppLoading } from "expo";
import React from "react";
import { AsyncStorage, UIManager, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import EStyleSheet from "react-native-extended-stylesheet";
import store from "./src/redux/store";

import { fontAssets } from "./helper/cachedFonts";
import Root from "./src/Root";

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
// `EStyleSheet.build(Colors)`

StatusBar.setBarStyle("light-content");

export default class App extends React.Component {
  state = {
    fontLoaded: false,
    ready: false
  };
  componentDidMount() {
    persistStore(
      store,
      {
        storage: AsyncStorage,
        whitelist: ["user"]
      },
      () => this.setState({ ready: true })
    );
  }

  // async _loadAssetAsync() {
  //   try {
  //     await Promise.all(fontAssets);
  //     this.setState({ fontLoaded: true });
  //     console.log("====================================");
  //     console.log(this.state.fontLoaded);
  //     console.log("====================================");
  //   } catch (err) {
  //     throw err;
  //   }
  // }

  render() {
    //if (!this.state.fontLoaded || !this.state.ready) {
    //  return <AppLoading />;
    //}

    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

Expo.registerRootComponent(App);
