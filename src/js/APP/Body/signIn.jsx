import React, { Component } from "react";
import axios from "axios";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.onSubmit = function(e) {
      e.preventDefault();
      console.log(typeof this.props.logIn);

      axios.post("http://localhost:10000/signIn", this.state).then(res => {
        if (res.data == "Not Found") {
          console.log("error");
        } else {
          this.props.logIn(res.data);
          // console.log(res.data);
        }
      });
    }.bind(this);
  }
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit}>
          <div class="form-group">
            <label for="InputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="InputEmail1"
              placeholder="Enter email"
              onChange={e => {
                this.setState({ email: e.target.value });
              }}
            />
          </div>
          <div class="form-group">
            <label for="InputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="InputPassword1"
              placeholder="Password"
              onChange={e => {
                this.setState({ password: e.target.value });
              }}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}
