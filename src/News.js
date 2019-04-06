import React from "react";
import Button from "@material-ui/core/Button";
import logo from "./logo.svg";

class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    };
  }

  render() {
    return (
      <div className="about">
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="contained" color="primary">
          News
        </Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          News
        </a>
      </div>
    );
  }
}
export default News;
