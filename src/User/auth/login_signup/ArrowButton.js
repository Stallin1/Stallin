import React, { Component } from "react";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
class ArrowButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageVisibility: { display: "inline" },
      className: props.className,
      onClick: props.onClick,
    };
  }
  onClick = () => {
    this.state.onClick();
  };

  render() {
    return (
      <button
        type="button"
        onClick={this.onClick}
        style={this.state.imageVisibility}
        className={this.state.className}
      >
        <ArrowForwardIcon />
      </button>
    );
  }
}
export default ArrowButton;