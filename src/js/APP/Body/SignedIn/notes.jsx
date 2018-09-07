import React, { Component } from "react";
export default class Notes extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-1 col-md-2" style={{ align: "center" }}>
            <button type="button" class="btn btn-outline-danger">
              Delete
            </button>
          </div>
          <div className="col-lg-11 col-md-10">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the Notes
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
