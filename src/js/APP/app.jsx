import React, { Component } from "react";
import NavBar from "./Header/NavBar.jsx";
import Body from "./Body/body.jsx";
import { BrowserRouter } from "react-router-dom";

export default class APP extends Component {
  constructor() {
    super();
    this.state = {
      isloggedIn: false,
      token: "",
      name: "",
      userData: {}
    };
    this.logIn = function(data) {
      this.setState({ name: data.name, token: data.token, isloggedIn: true });
    }.bind(this);
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <React.Fragment>
            <NavBar name={this.state.name} />
            <br />
            <Body state={this.state} logIn={this.logIn} />
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}
//Make single source of truth structure
