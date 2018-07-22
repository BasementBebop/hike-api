import React, { Component } from 'react';
import HikeListContainer from './HikeListContainer';
import HikeFilters from './HikeFilters';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      filters: {
        
      }
    }
  }
  render() {
    return (
      <div>
        <header>
          <h1>Hikeboye</h1>
        </header>
        <p className="App-intro">
          Find a sweet spot on Mt Hood
        </p>
        <HikeFilters />
        <h1>All them sweet hikes:</h1>
        <HikeListContainer />
      </div>
    );
  }
}

export default App;
