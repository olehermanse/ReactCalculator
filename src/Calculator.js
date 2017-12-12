import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class StatCalculator extends React.Component {
  state = {"number_A": "",
           "number_B": "",
           "number_C": "",
           "operator": "+"};

  textChange = (event) => {
    var newState = {}
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  };

  handleChange = (event, index, value) => this.setState({"operator": value});

  onCalc = (event) => {
    var c = 0;
    const a = Number(this.state.number_A);
    const b = Number(this.state.number_B);
    switch (this.state.operator) {
      case "+":
        c = a + b;
        break;
      case "-":
        c = a - b;
        break;
      case "*":
        c = a * b;
        break;
      case "/":
        c = a / b;
        break;
      case "%":
        c = a % b;
        break;
      default:
        break;
    }
    this.setState({"number_C": c})
  };

  render() {
    return (
      <div className="calc_grid">

        <TextField id="number_A" hintText="A" className="number_A"
        onChange={this.textChange} value={this.state.number_A} style={{width: "1fr"}}
        />

        <SelectField
        value={this.state.operator}
        onChange={this.handleChange}
        id="operator"
        style={{width:"1fr", gridArea: "op"}}
        >
          <MenuItem value={"+"} primaryText="+" />
          <MenuItem value={"-"} primaryText="-" />
          <MenuItem value={"*"} primaryText="*" />
          <MenuItem value={"/"} primaryText="/" />
          <MenuItem value={"%"} primaryText="%" />
        </SelectField>

        <TextField id="number_B" hintText="B"  className="number_B"
        onChange={this.textChange} value={this.state.number_B} style={{width:"1fr"}}
        />
        <div className="calc_btn">
        <RaisedButton label="=" onClick={this.onCalc} style={{width:"100%"}}/>
        </div>
        <TextField id="number_C" hintText="Result"  className="number_C"
        value={this.state.number_C} style={{width:"1fr"}}
        />

      </div>
    );
  }
}
