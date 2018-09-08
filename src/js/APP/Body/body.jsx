import React, { Component } from "react";
import SignUp from "./SignUp.jsx";
import SignIn from "./signIn.jsx";
import { Switch, Route } from "react-router-dom";
import HomePage from "./SignedIn/home.jsx";

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.fun = function(data) {
      this.props.logIn(data);
    }.bind(this);
  }
  render() {
    var body = null;
    if (this.props.state.isloggedIn) {
      body = (
        <React.Fragment>
          <HomePage
            state={this.props.state}
            getNotes={this.props.getNotes}
            refresh={this.props.refresh}
          />
        </React.Fragment>
      );
    } else {
      body = (
        <React.Fragment>
          <Route exact={true} path="/signUp" component={SignUp} />
          <Route
            exact={true}
            path="/signIn"
            component={() => <SignIn logIn={this.fun} />}
          />
          <Route
            exact={true}
            path="/"
            render={() => (
              <React.Fragment>
                <h5>Sign in to continue</h5>
                {/* <img src="./image/notepad.png" /> */}
              </React.Fragment>
            )}
          />
        </React.Fragment>
      );
    }
    return body;
  }
}
