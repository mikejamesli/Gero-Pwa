import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import BottomNav from './Components/bottomnav'
import NavBar from './Components/navbar'


class App extends Component {
  state = {
    value: 0,
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
        <NavBar></NavBar>
          <img src={logo} className="App-logo" alt="logo" />
          <Button variant="contained" color="primary">
            Hello World
          </Button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <BottomNav></BottomNav>
      </div>
    );
  }
}

export default App;
