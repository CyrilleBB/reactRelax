import React, { Component } from "react";
import campagne from "../assets/img/campagne.png";
import campagneSon from "../assets/audio/campagneSon.mp3";

class Campagne extends Component {
  state = {
    imageURL: campagne,
    sonUrl: campagneSon
  };
  changeElement = () => {
    this.props.addElement(this.state);
  };
  render() {
    return <li onClick={this.changeElement}>Campagne</li>;
  }
}

export default Campagne;
