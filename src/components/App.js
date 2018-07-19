import React, { Component } from 'react';
import HikeListContainer from './HikeListContainer';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Hikeboye</h1>
        </header>
        <p className="App-intro">
          Find a sweet spot on Mt Hood
        </p>
        <h1>All them sweet hikes:</h1>
        <HikeListContainer />
      </div>
    );
  }
}

export default App;
