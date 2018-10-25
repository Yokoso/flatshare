import React, { Component } from 'react';
import './App.css';
import AppSearchBar from './components/AppSearchBar';
import AppLogo from './components/AppLogo';
import AppIcon from './components/AppIcon';
import AppBoard from './components/AppBoard';
import firebase from 'firebase/app';
import 'firebase/firestore';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offersList: [
        {
          id: 1,
          title: 'test',
          description: 'test',
          location: 'test',
          status: 'active'
        },
        {
          id: 2,
          title: 'test2',
          description: 'test2',
          location: 'test2',
          status: 'active'
        }
    ]
    }
  }

  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCzL0KoIKYekBtHiWBIefzZdbTixgjAPYw",
      authDomain: "flatsharestore.firebaseapp.com",
      databaseURL: "https://flatsharestore.firebaseio.com",
      projectId: "flatsharestore",
      storageBucket: "",
      messagingSenderId: "881866078799"
    };
    firebase.initializeApp(config);

    const db = firebase.firestore();
    db.settings({ timestampsInSnapshots: true });

    db.collection('flatOffers').get().then((snapshot) => {
      snapshot.docs.forEach(offer => {
        this.state.offersList.push(offer.data());
        // console.log(this.state)
      })
    })
  }

  render() {
    return (
      <div className="App">
        <AppSearchBar />
        <section className="hero">
          <AppLogo imgSrc="logo.png" />
          <div className="icons">
            <AppIcon iconName="cloud" />
            <AppIcon iconName="favorite" />
            <AppIcon iconName="attachment" />
            <AppIcon iconName="home" />
          </div>
        </section>
        <AppBoard offers={this.state.offersList}/>
      </div>
    );
  }
}

export default App;
