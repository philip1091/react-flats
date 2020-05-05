import React, { Component } from 'react';

import flats from '../data/flats.js';

import Flat from './flat.jsx';

const FlatList = (props) => {
  const renderList = () => {
    return props.flats.map((flat, index) => {
      return(
        <Flat
          flat={flat} key={flat.lat} index={index}
          selected={flat.name === props.selectedFlat.name}
          selectFlat={props.selectFlat}
         />
      )
    })
  }

  return (
    <div className="flat-list">{renderList()}</div>
  )
}

export default FlatList;
