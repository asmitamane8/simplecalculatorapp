import React, { Component } from "react";
import Button from "./Button/Button";
import "./CalculatorMain.css";
import Display from "./Display/Display";
import Keypad from "./Keypad/Keypad";

class Calculator extends Component {

  constructor() {
    super();
    this.state = { userdata: "" };
  }

  calculate = () => {
    try {
      const result = eval(this.state.userdata);
      this.setState({ userdata: result });
    } catch (error) {
      this.setState({ userdata: "error" });
    }
  };


  handleClick = (event) => {
    const value = event.target.getAttribute("data-value");
    switch (value) {
      case "clear":
        this.setState({ userdata: "" });
        break;
      case "equal":
        this.calculate();
        break;
      default:
        this.setState({ userdata: this.state.userdata + value });//append with user input
    }
  };
  render() {
    return (
      <div className="Calculator">
        <Display userdata={this.state.userdata} />
        <Keypad>
          <Button onClick={this.handleClick} label="C" value="clear" />
          <Button onClick={this.handleClick} label="7" value="7" />
          <Button onClick={this.handleClick} label="4" value="4" />
          <Button onClick={this.handleClick} label="1" value="1" />
          <Button onClick={this.handleClick} label="0" value="0" />

          <Button onClick={this.handleClick} label="/" value="/" />
          <Button onClick={this.handleClick} label="8" value="8" />
          <Button onClick={this.handleClick} label="5" value="5" />
          <Button onClick={this.handleClick} label="2" value="2" />
          <Button onClick={this.handleClick} label="." value="." />

          <Button onClick={this.handleClick} label="x" value="*" />
          <Button onClick={this.handleClick} label="9" value="9" />
          <Button onClick={this.handleClick} label="6" value="6" />
          <Button onClick={this.handleClick} label="3" value="3" />
          <Button onClick={this.handleClick} label="" value="null" />

          <Button onClick={this.handleClick} label="-" value="-" />
          <Button onClick={this.handleClick} label="+" size="2" value="+" />
          <Button onClick={this.handleClick} label="=" size="2" value="equal" />
        </Keypad>
      </div>
    );
  }
}

export default Calculator;
