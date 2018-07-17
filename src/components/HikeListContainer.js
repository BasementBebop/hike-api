import React, { Component } from 'react';

class HikeListContainer extends Component {
  constructor() {
    super();
    this.state = {
      trails: ['trail boye']
    }
  }

  componentDidMount() {
    fetch(`https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=${process.env.REACT_APP_HIKING_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          trails: data.trails
        });
      }
    )
  }

  render() {
    return (
      <div>
        <h1>All them sweet hikes</h1>
        <ul>
          {this.state.trails.map(trail => (
            <li key={trail.id}>
              {trail.name}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default HikeListContainer;