import React, { Component } from 'react';

class AppCard extends Component {
  render() {
    return (
      <i className="material-icons">
        {this.props.iconName}
      </i>
    )
  }
}

export default AppCard;
