import React, { Component } from 'react';

class HikeListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      trails: [],
      filters: [this.props.filters]
    }
  }

  componentDidMount() {
    fetch(`https://www.hikingproject.com/data/get-trails?lat=45.373690&lon=-121.695936&maxResults=500&maxDistance=30&key=200315624-876d7a6a86b1fc088bfd1d945e271ff2`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          trails: data.trails
        });
      },
      error => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {
    const { error, isLoaded, trails } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <ul>
          {trails.map(trail => (
            <li key={trail.id}>
              {trail.name}
              <img src={trail.imgMedium} alt=""/>
            </li>
          ))}
        </ul>
      )
    }
  }
}

export default HikeListContainer;