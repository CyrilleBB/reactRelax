import React, { Component } from "react";
import campagne from "../assets/img/campagne.jpg";
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
    return <li onClick={this.changeElement}>campagne</li>;
  }
}

export default Campagne;
