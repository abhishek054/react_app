import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var loggedIn = this.props.name;
    var body = null;
    if (loggedIn) {
      body = (
        <nav class="navbar navbar-light bg-light">
          <span class="navbar-brand mb-0 h1">
            <h3>Welcome to the Notes APP</h3>
          </span>
          <div className="btn-outline">
            <b>LoggedIn as {loggedIn}</b>
          </div>
        </nav>
      );
    } else {
      body = (
        <nav class="navbar navbar-light bg-light">
          <span class="navbar-brand mb-0 h1">
            <div>Welcome to the APP</div>
          </span>
          <div className="btn-outline">
            <Link to="/signUp">
              <button className="btn btn-primary m-2">Sign Up</button>
            </Link>
            <Link to="/signIn">
              <button className="btn btn-primary m-2">Sign In</button>
            </Link>
          </div>
        </nav>
      );
    }
    return body;
  }
}
