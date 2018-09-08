import React, { Component } from "react";
import axios from "axios";

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: ""
    };
    this.onSubmit = function(e) {
      e.preventDefault();
      var k = Object.assign({}, this.state);
      k.notes = [];
      // console.log(k);
      axios.post("http://localhost:10000/signUp", k).then(res => {
        console.log(res.data);
        this.setState({
          name: "",
          email: "",
          password: ""
        });
        document.getElementById("form").reset();
        alert(res.data);
      });
    }.bind(this);
  }
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit} id="form">
          <div class="form-group">
            <label for="InputName">Name</label>
            <input
              type="name"
              class="form-control"
              id="InputName1"
              placeholder="Enter name"
              onChange={e => {
                this.setState({ name: e.target.value });
              }}
            />
          </div>
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
