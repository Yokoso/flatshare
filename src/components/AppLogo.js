import React, { Component } from 'react';

class AppLogo extends Component {
  render() {
    return (
      <img className="logo" src={"/src/assets/img/" + this.props.imgSrc} alt={ this.props.imgSrc } />
    )
  }
}

export default AppLogo;
