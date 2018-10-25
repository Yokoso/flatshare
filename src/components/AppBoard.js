import React, { Component } from 'react';
import AppCard from './AppCard';

class AppBoard extends Component {
  render() {
    var cards = this.props.offers.map((offer) => {
      return <AppCard id={offer.id}
                      title={offer.title}
                      description={offer.description}
                      location={offer.location}
                      key={offer.id} />
    });
    return (
      <div className="list">
        {cards}
      </div>
    )
  }
}

export default AppBoard;
