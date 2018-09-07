import React, { Component } from "react";
import Notes from "./notes.jsx";

export default class HomePage extends Component {
  constructor() {
    super();
    this.onADD = () => {
      let textbox = document.getElementById("note");
      console.log(textbox.value);
      textbox.value = "";
    };
  }
  render() {
    const divStyle = {
      textAlign: "center"
    };
    return (
      <React.Fragment>
        <div className="container">
          <h3>Add Notes here</h3>

          <div className="row">
            <div className="col-lg-11 col-md-8">
              <input type="text" className="form-control" id="note" />
            </div>
            <div className="col-lg-1 col-md-4">
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                onClick={this.onADD}
              >
                ADD
              </button>
            </div>
          </div>
          <br />
          <Notes />
        </div>
      </React.Fragment>
    );
  }
}
