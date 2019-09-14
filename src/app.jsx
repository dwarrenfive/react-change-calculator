import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      due: "",
      received: "",
      twenties: 0,
      tens: 0,
      five: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickles: 0,
      pennies: 0
    };
    // this.calculate = this.calculate.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  calulate() {
    console.log();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <h1>Change Calculator</h1>
        <div className="row">
          <div className="col-4">
            <div className="card rounded-lg shadow-lg">
              <div className="card-header">
                <h6>Enter Information</h6>
              </div>
              <form className="m-1">
                <label>
                  <h6>How much is due?</h6>
                  <input
                    type="number"
                    name="due"
                    id="due"
                    className="form-control"
                    placeholder="i.e., 221.94"
                    value={this.state.due}
                    onChange={this.handleChange}
                  />
                </label>
              </form>
              <form className="m-1">
                <label>
                  <h6>How much was received?</h6>
                  <input
                    type="number"
                    name="received"
                    id="received"
                    className="form-control"
                    placeholder="i.e., 240"
                    value={this.state.received}
                    onChange={this.handleChange}
                  />
                </label>
              </form>
              <div className="card-footer">
                <button
                  name="submit"
                  onClick={this.calculate}
                  className="btn btn-primary btn-block"
                >
                  Calculate
                </button>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="card rounded-lg shadow-lg">
              <div className="card-body">
                <div
                  name="output"
                  id="output"
                  className="alert alert-success"
                ></div>
                <div className="row">
                  <div className="col">
                    <div
                      className="alert alert-secondary"
                      value={this.state.twenties}
                    >
                      Twenties
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="alert alert-secondary"
                      value={this.state.tens}
                    >
                      Tens
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="alert alert-secondary"
                      value={this.state.fives}
                    >
                      Fives
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="alert alert-secondary"
                      value={this.state.ones}
                    >
                      Ones
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div
                      className="alert alert-secondary"
                      value={this.state.quarters}
                    >
                      Quarters
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="alert alert-secondary"
                      value={this.state.dimes}
                    >
                      Dimes
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="alert alert-secondary"
                      value={this.state.nickles}
                    >
                      Nickles
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="alert alert-secondary"
                      value={this.state.pennies}
                    >
                      Pennies
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
