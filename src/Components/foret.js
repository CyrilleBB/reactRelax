import React, { Component } from "react";
import foret from "../assets/img/foret.jpg";
import foretSon from "../assets/audio/foretSon.mp3";

class Foret extends Component {
  state = {
    imageURL: foret,
    sonUrl: foretSon
  };
  changeElement = () => {
    this.props.addElement(this.state);
  };
  render() {
    return <li onClick={this.changeElement}>foret</li>;
  }
}

export default Foret;
