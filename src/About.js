import React from "react";
import Button from "@material-ui/core/Button";
import logo from "./logo.svg";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    };
  }

  render() {
    return (
      <div className="home">
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="contained" color="primary">
          About
        </Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          About
        </a>
      </div>
    );
  }
}
export default About;
