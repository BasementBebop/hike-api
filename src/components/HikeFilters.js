import React, { Component } from 'react';
import { Input, Label, Button } from 'reakit';

class HikeFilters extends Component {
  constructor() {
    super();
    this.state = { hasResults: false }
  }

  render() {
    return(
      <form>
        <Input name="longitude" type="text" placeholder="Longitude"/>
        <Input name="latitude" type="text" placeholder="Latitude"/>
        <Input name="range" type="text" placeholder="Range"/>
        <Button type="submit">Find Hikes</Button>
      </form>
    )
  }
}

export default HikeFilters;