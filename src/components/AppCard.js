import React, { Component } from 'react';

class AppCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card_title">
          {this.props.title}
        </div>
        <div className="card_details">
          {this.props.description}
        </div>
        <div className="card_location">
          {this.props.location}
        </div>
      </div>
    )
  }
}

export default AppCard;
