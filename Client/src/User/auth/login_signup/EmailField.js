import React, { Component } from 'react';
import { TextField,InputAdornment } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
class EmailField extends Component {
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
        name={this.props.name}
        onChange={(e) => this.props.handleInputs(e, this.props.user, this.props.setUser)}
        label={this.state.label}
        style={this.state.style}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
      ></TextField>
    );
  }
}
export default EmailField;