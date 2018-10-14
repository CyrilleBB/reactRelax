import React, { Component } from "react";
// import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import pluie from "./assets/img/pluie.jpg";
import foret from "./assets/img/foret.jpg";
import campagne from "./assets/img/campagne.png";
import montagne from "./assets/img/montagne.jpg";
import mer from "./assets/img/mer.jpg";
import pluieSon from "./assets/audio/pluieSon.mp3";
import foretSon from "./assets/audio/foretSon.mp3";
import campagneSon from "./assets/audio/campagneSon.mp3";
import montagneSon from "./assets/audio/montagneSon.mp3";
import merSon from "./assets/audio/merSon.mp3";

class App extends Component {
  state = {
    imageURL: pluie,
    sonUrl: pluieSon
  };

  change = (uneImage, unSon) => {
    this.setState({
      imageURL: uneImage,
      sonUrl: unSon
    });
  };

  toggleMenu = () => {
    const menu = document.querySelector("ul");
    menu.style.display = "none";
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
            <li
              onClick={() => {
                this.change(montagne, montagneSon);
              }}
            >
              Montagne
            </li>
            <li
              onClick={() => {
                this.change(mer, merSon);
              }}
            >
              mer
            </li>
            <li
              onClick={() => {
                this.change(campagne, campagneSon);
              }}
            >
              campagne
            </li>
            <li
              onClick={() => {
                this.change(foret, foretSon);
              }}
            >
              foret
            </li>
            <li
              onClick={() => {
                this.change(pluie, pluieSon);
              }}
            >
              pluie
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
