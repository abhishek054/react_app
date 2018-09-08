import React, { Component } from "react";
import Notes from "./notes.jsx";
import axios from "axios";

export default class HomePage extends Component {
  constructor() {
    super();
    this.keyPress = e => {
      if (e.key == "Enter") {
        this.onADD();
      }
    };
    this.onDelete = function(x) {
      axios
        .post("http://localhost:10000/deleteNote", x, {
          headers: {
            Authorization: `Bearer ${this.props.state.token}`
          }
        })
        .then(res => {
          this.onClickView();
        });
    }.bind(this);
    this.onADD = function() {
      let textbox = document.getElementById("note").value.toString();
      var data = {
        date: new Date(),
        note: textbox
      };
      if (textbox) {
        axios
          .post("http://localhost:10000/addNotes", data, {
            headers: {
              Authorization: `Bearer ${this.props.state.token}`
            }
          })
          .then(res => {
            document.getElementById("note").value = "";
            this.onClickView();
          });
      }
    }.bind(this);
    this.onClickView = function() {
      var c = "Bearer " + this.props.state.token.toString();
      axios
        .get("http://localhost:10000/getInfo", {
          headers: {
            Authorization: c
          }
        })
        .then(res => {
          if (res.data == "Not Found") {
            console.log("error");
          } else {
            document.getElementById("view").style.display = "none";
            this.props.getNotes(res.data);
          }
        });
    }.bind(this);
  }
  render() {
    const welcome = {
      textAlign: "center"
    };
    return (
      <React.Fragment className="container">
        <div className="container">
          <h5>Add Notes here</h5>

          <div className="row">
            <div className="col-lg-11 col-md-11">
              <input
                type="text"
                className="form-control"
                onKeyUp={this.keyPress}
                id="note"
                autoFocus
              />
            </div>
            <div className="col-lg-1 col-md-1">
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
          <button
            class="btn btn-outline-success my-2 my-sm-0"
            onClick={this.onClickView}
            id="view"
          >
            View
          </button>
          <br />
          <br />
          {this.props.state.notes == null ? (
            <h2 style={welcome}>Welcome Home</h2>
          ) : (
            <React.Fragment>
              {this.props.state.notes.length == 0 ? (
                <h5>No notes added</h5>
              ) : (
                <div>
                  {this.props.state.notes.map(x => (
                    <Notes
                      note={x}
                      delete={() => {
                        this.onDelete(x);
                      }}
                    />
                  ))}
                </div>
              )}
            </React.Fragment>
          )}
        </div>
      </React.Fragment>
    );
  }
}
