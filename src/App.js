import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'



import './App.css';

function App() {

  library.add(faStroopwafel)
  return (
    <div className="App">
     <span><button>work</button>&nbsp;<button>about</button>&nbsp;<button>contact</button></span>


    </div>
  );
}

export default App;
