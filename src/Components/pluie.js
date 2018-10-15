import React, { Component } from "react";
import pluie from "../assets/img/pluie.jpg";
import pluieSon from "../assets/audio/pluieSon.mp3";

class Pluie extends Component {
  state = {
    imageURL: pluie,
    sonUrl: pluieSon
  };
  changeElement = () => {
    this.props.addElement(this.state);
  };
  render() {
    return <li onClick={this.changeElement}>pluie</li>;
  }
}

export default Pluie;
