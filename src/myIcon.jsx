// Using grommet-icons, generate a new icon component
// compatible with react-leaflet icons
import { Location } from 'grommet-icons';
import { divIcon } from 'leaflet';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const CenterGravityIcon = () => {
  return (  
    <Location color='red'/>
  );
};

export const centerGravityIcon = divIcon({
  html: ReactDOMServer.renderToString(<CenterGravityIcon />),
  iconSize: [24, 24],
  className: 'my-icon',
  // iconAnchor: [10, 10],
});

const CenterIcon = () => {
  return (  
    <Location color='blue'/>
  );
};

export const centerIcon = divIcon({
  html: ReactDOMServer.renderToString(<CenterIcon />),
  iconSize: [24, 24],
  className: 'my-icon',
  // iconAnchor: [10, 10],
});
