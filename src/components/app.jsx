import React, { Component } from 'react';

import FlatList from './flat_list.jsx';
import Marker from './marker.jsx';

import flats from '../data/flats.js';

import GoogleMapReact from 'google-map-react';

class App extends Component {
  constructor(props){
    super(props)

    this.state={
      selectedFlat:flats[0],
      flats
    }
  }

  center () {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    }
  };

  selectFlat = (index) => {
    this.setState({
      selectedFlat: flats[index]
    })
  }

  render() {
    return(
      <div>
        <FlatList selectedFlat={this.state.selectedFlat} flats={this.state.flats}
         selectFlat={this.selectFlat}/>
        <div className="map-container">
          <GoogleMapReact
            defaultCenter={this.center()}
            defaultZoom={10}>
            <Marker lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng}/>
          </GoogleMapReact>
        </div>
      </div>
    )
  }
}


export default App;
