import React, { Component } from "react";
import montagne from "../assets/img/montagne.jpg";
import montagneSon from "../assets/audio/montagneSon.mp3";

class Montagne extends Component {
  state = {
    imageURL: montagne,
    sonUrl: montagneSon
  };

  changeElement = () => {
    this.props.addElement(this.state);
  };
  render() {
    return <li onClick={this.changeElement}>montagne</li>;
  }
}

export default Montagne;
