import React, { Component } from "react";
import { TextField, InputAdornment,IconButton} from "@material-ui/core";
import Lock from "@material-ui/icons/Lock";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
class PasswordField extends Component {
  constructor(props) {
    super(props);
    this.type = this.props.type;
    this.state = {
      type: this.props.type,
      label: this.props.label,
      style: this.props.style,
      visibleStyle: { display: "none" },
      invisibleStyle: { display: "inline" },
    };

    this.passwordVisible = false;
  }
  togglePasswordVisibility = () => {
    if (this.passwordVisible) {
      this.setState({
        type: "password",
        visibleStyle: { display: "none" },
        invisibleStyle: { display: "inline" },
      });
    } else
      this.setState({
        type: "text",
        visibleStyle: { display: "inline" },
        invisibleStyle: { display: "none" },
      });
    this.passwordVisible = !this.passwordVisible;
  };
  render() {
    return (
      <TextField
        id={this.props.id}
        type={this.state.type}
        label={this.state.label}
        style={this.state.style}
        name={this.props.name}
        onChange={(e) => this.props.handleInputs(e, this.props.user, this.props.setUser)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Lock />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={this.togglePasswordVisibility}
                aria-label="show password"
              >
                <VisibilityIcon style={this.state.visibleStyle} />
                <VisibilityOffIcon style={this.state.invisibleStyle} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      ></TextField>
    );
  }
}
export default PasswordField;