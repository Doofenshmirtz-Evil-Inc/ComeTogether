import React from 'react';
import history from './history'
import './Page.css';

const App = () => {


  return (
    <div className="App2">
      <div className="container2">
      <button className="OAuthBtn2"
      onClick={() => history.push('/')}>
        It Worked
      </button>
      </div>
    </div>
  );
};

export default App;
