import React, { Component } from 'react';
import { Input, Label, Button } from 'reakit';

class HikeFilters extends Component {

  longitudeInput = React.createRef();
  latitudeInput = React.createRef();
  rangeInput = React.createRef();

  applyFilters = e => {
    e.preventDefault();
    const filters = {
      latitude: this.latitudeInput.value.value,
      longitude: this.longitudeInput.value.value,
      range: this.rangeInput.value.value
    }
  }

  render() {
    return(
      <form onSubmit={this.applyFilters}>
        <Label>
          Latitude <Input name="latitude" ref={this.latitudeInput} type="text" defaultValue="45.373690"/>
        </Label>
        <Label>
          Longitude <Input name="longitude" ref={this.longitudeInput} type="text" defaultValue="-121.695936"/>
        </Label>
        <Label>
          Range (max: 200 miles) <Input name="range" ref={this.rangeInput} type="text" defaultValue="50"/>
        </Label>
        <Button as="button" type="submit">Find Hikes</Button>
      </form>
    )
  }
}

export default HikeFilters;