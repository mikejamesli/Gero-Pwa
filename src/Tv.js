import React from "react";
import Button from "@material-ui/core/Button";
import logo from "./logo.svg";

class Tv extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    };
  }

  render() {
    return (
      <div className="tv">
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="contained" color="primary">
          Tv
        </Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tv
        </a>
      </div>
    );
  }
}
export default Tv;
