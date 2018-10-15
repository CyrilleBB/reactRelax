import React, { Component } from "react";
import mer from "../assets/img/mer.jpg";
import merSon from "../assets/audio/merSon.mp3";

class Mer extends Component {
  state = {
    imageURL: mer,
    sonUrl: merSon
  };
  changeElement = () => {
    this.props.addElement(this.state);
  };
  render() {
    return <li onClick={this.changeElement}>mer</li>;
  }
}

export default Mer;
