import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      due: "",
      received: "",
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    };
    this.calculate = this.calculate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  calculate() {
    var amountReceived = this.state.received; // 40
    var amountDue = this.state.due; // 20

    var changeDue = Math.round(100 * (amountReceived - amountDue)).toFixed(2); //2000

    if (changeDue < 0) {
      document.getElementById(
        "output"
      ).innerHTML = `$ Error, amount received must be greater than amount owed`;
    } else {
      document.getElementById(
        "output"
      ).innerHTML = `Your total cash back is: $${(changeDue / 100).toFixed(2)}`;
    }

    if (changeDue >= 2000) {
      var twenties = Math.floor(changeDue / 2000);
      changeDue = changeDue % 2000; // should amount to 1
    }
    if (changeDue >= 1000) {
      var tens = Math.floor(changeDue / 1000);
      changeDue = changeDue % 1000;
    }
    if (changeDue >= 500) {
      var fives = Math.floor(changeDue / 500);
      changeDue = changeDue % 500;
    }
    if (changeDue >= 100) {
      var ones = Math.floor(changeDue / 100);
      changeDue = changeDue % 100;
    }
    if (changeDue >= 25) {
      var quarters = Math.floor(changeDue / 25);
      changeDue = changeDue % 25;
    }
    if (changeDue >= 10) {
      var dimes = Math.floor(changeDue / 10);
      changeDue = changeDue % 10;
    }
    if (changeDue >= 5) {
      var nickels = Math.floor(changeDue / 5);
      changeDue = changeDue % 5;
    }
    if (changeDue >= 1) {
      var pennies = Math.round(changeDue / 1);
      changeDue = changeDue % 1;
    }

    this.setState({
      twenties: twenties,
      tens: tens,
      fives: fives,
      ones: ones,
      quarters: quarters,
      dimes: dimes,
      nickels: nickels,
      pennies: pennies
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="container m-4">
        <h1 className="text-white">Change Calculator</h1>
        <hr style={{ borderTop: "1px solid white" }} />
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
                <center>
                  <div
                    name="output"
                    id="output"
                    className="alert alert-success"
                  ></div>
                </center>
                <div className="row">
                  <div className="col">
                    <div id="money" className="alert alert-secondary">
                      <h6>Twenties</h6>
                      <p id="twenties" className="change">
                        {this.state.twenties}
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div id="money" className="alert alert-secondary">
                      <h6>Tens</h6>
                      <p id="tens" className="change">
                        {this.state.tens}
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div id="money" className="alert alert-secondary">
                      <h6>Fives</h6>
                      <p id="fives" className="change">
                        {this.state.fives}
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div id="money" className="alert alert-secondary">
                      <h6>Ones</h6>
                      <p id="ones" className="change">
                        {this.state.ones}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div id="money" className="alert alert-secondary">
                      <h6>Quarters</h6>
                      <p id="quarters" className="change">
                        {this.state.quarters}
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div id="money" className="alert alert-secondary">
                      <h6>Dimes</h6>
                      <p id="Dimes" className="change">
                        {this.state.dimes}
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div id="money" className="alert alert-secondary">
                      <h6>Nickels</h6>
                      <p id="nickels" className="change">
                        {this.state.nickels}
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div id="money" className="alert alert-secondary">
                      <h6>Pennies</h6>
                      <p id="pennies" className="change">
                        {this.state.pennies}
                      </p>
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
