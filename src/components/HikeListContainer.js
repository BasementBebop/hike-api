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

    this.loadHikes = this.loadHikes.bind(this);
  }

  componentDidMount() {
    this.loadHikes();
  }

  loadHikes() {
    const { latitude, longitude, maxResults, maxDistance } = this.props.filters;

    fetch(`https://www.hikingproject.com/data/get-trails?lat=${latitude}&lon=${longitude}&maxResults=${maxResults}&maxDistance=${maxDistance}&key=${process.env.REACT_APP_HIKING_API_KEY}`)
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