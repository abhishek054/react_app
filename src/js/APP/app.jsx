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
      notes: null
    };
    this.logIn = function(data) {
      this.setState({
        name: data.name,
        token: data.token,
        isloggedIn: true
      });
    }.bind(this);
    this.getNotes = function(notes) {
      this.setState({ notes: notes });
    }.bind(this);
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <React.Fragment>
            <NavBar name={this.state.name} />
            <br />
            <Body
              state={this.state}
              logIn={this.logIn}
              getNotes={this.getNotes}
              refresh={this.refresh}
            />
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}
//Make single source of truth structure
