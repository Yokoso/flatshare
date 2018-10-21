import React, { Component } from 'react';
import './App.css';
import AppBoard from './components/AppBoard';

let offersList = [
  {
    id: 1,
    title: 'Flat to rent',
    description: 'short description',
    location: 'Athens',
    status: 'active'
  },
  {
    id: 2,
    title: 'One room for female',
    description: 'short description',
    location: 'Melbourne',
    status: 'not-active'
  },
  {
    id: 3,
    title: 'House for sale',
    description: 'short description',
    location: 'Wroclaw',
    status: 'active'
  },
  {
    id: 4,
    title: 'Flat to share',
    description: 'short description',
    location: 'London',
    status: 'not-active'
  },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBoard offers={offersList}/>
      </div>
    );
  }
}

export default App;
