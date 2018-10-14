import React, { Component } from "react";
// import { BrowserRouter, Route } from "react-router-dom";
import pluie from "./assets/img/pluie.jpg";
import foret from "./assets/img/foret.jpg";
import campagne from "./assets/img/campagne.png";
import montagne from "./assets/img/montagne.jpg";
import mer from "./assets/img/mer.jpg";

class App extends Component {
  state = {
    imageURL: pluie
  };

  changeImage = uneImage => {
    this.setState({
      imageURL: uneImage
    });
  };

  render() {
    return (
      <div className="App">
        <img id="background" src={this.state.imageURL} alt="pluie" />

        <button
          onClick={() => {
            this.changeImage(montagne);
          }}
        >
          Montagne
        </button>
        <button
          onClick={() => {
            this.changeImage(mer);
          }}
        >
          mer
        </button>
        <button
          onClick={() => {
            this.changeImage(campagne);
          }}
        >
          campagne
        </button>
        <button
          onClick={() => {
            this.changeImage(foret);
          }}
        >
          foret
        </button>
        <button
          onClick={() => {
            this.changeImage(pluie);
          }}
        >
          pluie
        </button>
      </div>
    );
  }
}

export default App;
