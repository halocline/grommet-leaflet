// Using grommet-icons, generate a new icon component
// compatible with react-leaflet icons
import { Location } from 'grommet-icons';
import { divIcon } from 'leaflet';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const MyIcon = () => {
  return (  
    <Location color='red'/>
  );
};

const myIcon = divIcon({
  html: ReactDOMServer.renderToString(<MyIcon />),
  iconSize: [24, 24],
  className: 'my-icon',
  // iconAnchor: [10, 10],
});

export default myIcon;
