import React from 'react';
import Circle from './Circle';

function showCircle() {
  //  const colors = ["00FFFF9", "008089", "#393E41", "#E94F37", "#1C89BF", "#A1D363"];
  const colors = ["#00FFF9", "#008080", "#393E41", "#E94F37", "#1C89BF", "#A1D363", "#85FFC7", "#297373", "#FF8552", "#A40E4C"];
  const ran = Math.floor(Math.random() * colors.length);
  const renderData = [];

  for (var i = 0; i < colors.length; i++) {
    renderData.push(<Circle bgColor={colors[i]} />)
  }
  return (renderData); // returns the whole selection of colors
  //return (<Circle bgColor={colors[ran]} />) //this will select the color randomly, once each time it's called
}

export default showCircle;