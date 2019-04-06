import React, { Component } from "react";
import "./App.css";
import BottomNav from "./Components/bottomnav";
import NavBar from "./Components/navbar";
import Home from "./Home";
import About from "./About";
import Tv from "./Tv";
import News from "./News";
import Contact from "./Contact";
import { Router } from "@reach/router";

class App extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          <Router>
            <Home path="/" />
            <About path="/about" />
            <News path="/news" />
            <Contact path="/contact" />
            <Tv path="/tv" />
          </Router>
        </header>
        <BottomNav />
      </div>
    );
  }
}

export default App;
