import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Notifications } from "expo";
import { addNavigationHelpers } from "react-navigation";
import { NavClient, NavUser } from "./Nav";
import { AuthScreen } from "../screens";
import { setAuthHeader } from "../../constants/api";

import resgiterNotification from "../../constants/resgiterNotification";

// @connect(state => ({
//   navigation: state.navigation,
//   user: state.user
// }))

const routerClient = NavClient.router;
const routerUser = NavUser.router;
class AppNavigator extends PureComponent {
  state = {
    notification: null
  };
  // ref={nav => {
  //   this.navigator = nav ? nav.props.navigation : nav;
  // }}
  componentWillMount() {
    // registerForPushNotificationsAsync();

    // Handle notifications that are received or selected while the app
    // is open. If the app was closed and then opened by tapping the
    // notification (rather than just tapping the app icon to open it),
    // this function will fire on the next tick after the app starts
    // with the notification data.
    this._notificationSubscription = Notifications.addListener(
      this._handleNotification
    );
  }

  _handleNotification = notification => {
    alert("Đéo");
    this.setState({ notification: notification });
  };
  render() {
    const navuser = addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.userNav
    });
    const navclient = addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.clientNav
    });

    if (this.props.user.isLogged && this.props.user.typeUser === "client") {
      setAuthHeader(this.props.user.token);
      resgiterNotification(this.props.user.info._id);
      return <NavClient navigation={navclient} />;
    }
    if (this.props.user.isLogged && this.props.user.typeUser === "user") {
      setAuthHeader(this.props.user.token);
      return <NavUser navigation={navuser} />;
    }
    return <AuthScreen />;
  }
}
export default connect(state => ({
  clientNav: state.clientNav,
  userNav: state.userNav,
  user: state.user
}))(AppNavigator);
export { routerUser, routerClient };
