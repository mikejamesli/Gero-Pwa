import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideoIcon";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "@reach/router";

const styles = {
  root: {
    width: 500
  }
};

class SimpleBottomNavigation extends React.Component {
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
      <div>
        <BottomNavigation value={value} onChange={this.handleChange} showLabels>
          <BottomNavigationAction
            component={Link}
            to="/tv"
            label="TV"
            icon={<OndemandVideoIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/news"
            label="News"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/about"
            label="About"
            icon={<LocationOnIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/contact"
            label="Contact"
            icon={<LocationOnIcon />}
          />
        </BottomNavigation>
      </div>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleBottomNavigation);
