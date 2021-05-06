import React, { Component } from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
class SimpleField extends Component {
  constructor(props) {
    super(props);
    this.type = this.props.type;
    this.state = {
      type: this.props.type,
      label: this.props.label,
      style: this.props.style,
    };
  }
  render() {
    return (
      <TextField
        id={this.props.id}
        type={this.state.type}
        label={this.state.label}
        style={this.state.style}
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <div></div>
            </InputAdornment>
          ),
        }}
      ></TextField>
    );
  }
}
export default SimpleField;