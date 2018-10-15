import React, { Component } from "react";
import "./App.css";
import Foret from "./Components/foret";
import Campagne from "./Components/campagne";
import Montagne from "./Components/montagne";
import Mer from "./Components/mer";
import Pluie from "./Components/pluie";
import pluie from "./assets/img/pluie.jpg";
import pluieSon from "./assets/audio/pluieSon.mp3";

class App extends Component {
  state = {
    imageURL: pluie,
    sonUrl: pluieSon
  };

  addElement = nature => {
    console.log(nature.imageURL);
    let imageUrl = nature.imageURL;
    let sonNature = nature.sonUrl;
    this.setState({
      imageURL: imageUrl,
      sonUrl: sonNature
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div id="boite">
            <div id="cercle">
              <div id="souffle">
                <p id="respire" />
              </div>
            </div>
          </div>

          <img id="background" src={this.state.imageURL} alt="pluie" />
          <audio src={this.state.sonUrl} autoPlay loop />
          <ul>
            <Montagne addElement={this.addElement} />
            <Mer addElement={this.addElement} />
            <Campagne addElement={this.addElement} />
            <Pluie addElement={this.addElement} />
            <Foret addElement={this.addElement} />
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
