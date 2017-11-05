import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addNavigationHelpers } from "react-navigation";
import Nav from "./Nav";
import { AuthScreen } from "../screens";

// @connect(state => ({
//   navigation: state.navigation,
//   user: state.user
// }))
class AppNavigator extends PureComponent {
  state = {};
  // ref={nav => {
  //   this.navigator = nav ? nav.props.navigation : nav;
  // }}

  render() {
    const nav = addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.nav
    });
    if (this.props.user.isLogged) {
      return <Nav navigation={nav} />;
    }
    return <Nav navigation={nav} />;
  }
}
export default connect(state => ({
  nav: state.nav,
  user: state.user
}))(AppNavigator);
export const router = Nav.router;
