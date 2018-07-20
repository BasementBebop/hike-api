import React, { Component } from 'react';
import { Input, Label, Button } from 'reakit';

class HikeFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 45.373690,
      longitude: -121.695936,
      range: 50
    }
  }

  handleChange = (e) => {
    const target = e.target;
    const value = parseFloat(target.value);
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  applyFilters = (e) => {
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    return(
      <form onSubmit={this.applyFilters}>
        <Label>
          Latitude <Input name="latitude" value={this.state.latitude} onChange={this.handleChange} type="text" placeholder="45.373690"/>
        </Label>
        <Label>
          Longitude <Input name="longitude" value={this.state.longitude} onChange={this.handleChange} type="text" placeholder="-121.695936"/>
        </Label>
        <Label>
          Range (max: 200 miles) <Input name="range" value={this.state.range} onChange={this.handleChange} type="text" placeholder="50"/>
        </Label>
        <Button as="button" type="submit">Find Hikes</Button>
      </form>
    )
  }
}

export default HikeFilters;