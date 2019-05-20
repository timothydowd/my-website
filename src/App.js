import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import Nav from './components/Nav'
import Header from './components/Header'



import './App.css';

class App extends Component {

  render(){

    library.add(faStroopwafel)
      return (
        <div className="App">
        <Nav></Nav>
        <Header></Header>
        
        


        </div>
    );
  }
}

export default App;
