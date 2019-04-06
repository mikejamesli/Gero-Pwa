import React from "react";
import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    };
  }

  render() {
    return (
      <div className="home">
        <div className="bg" />
      </div>
    );
  }
}
export default Home;
