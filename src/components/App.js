import React, { Component } from 'react';
import HikeListContainer from './HikeListContainer';
import HikeFilters from './HikeFilters';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      filters: {
        latitude: 45.373690,
        longitude: -121.695936,
        maxResults: 200,
        maxDistance: 30
      }
    }

    this.updateFilters = this.updateFilters.bind(this);
  }

  updateFilters({ latitude, longitude, maxResults, maxDistance }) {
    this.setState({
      latitude,
      longitude,
      maxResults,
      maxDistance
    });
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
        <HikeFilters updateFilters={this.updateFilters}/>
        <h1>All them sweet hikes:</h1>
        <HikeListContainer filters={this.state.filters} />
      </div>
    );
  }
}

export default App;
