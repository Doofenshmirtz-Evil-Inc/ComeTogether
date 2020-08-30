import React from 'react';
import { Button } from 'react-bootstrap';
import history from './history'

import './App.css';


const App = () => {


  return (
    <div className="App">
      <div className="container">
        <a href='http://localhost:8888'>
        <button className="OAuthBtn"
        onClick={() => history.push('/Page')}>
          Login with Spotify
        </button>
      </a>
      </div>
    </div>
  );
};

export default App;
