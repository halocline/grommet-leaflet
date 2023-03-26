import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {
  createElementObject,
  createPathComponent,
  extendContext,
} from '@react-leaflet/core';
import L from 'leaflet';
import { Location } from 'grommet-icons';

const defaultIcon = L.divIcon({
  className: 'grommet-marker',
  html: ReactDOMServer.renderToString(<Location />),
});

const createGrommetMarker = ({ position, title, alt, icon = defaultIcon }, context) => {
  const options = { title, alt, icon };
  const marker = new L.Marker(position, options);
  return createElementObject(
    marker,
    extendContext(context, { overlayContainer: marker }),
  );
};

const updateGrommetMarker = (instance, props, prevProps) => {
  if (props.position !== prevProps.position) {
    instance.setLatLng(props.position);
  }
};

const GrommetMarker = createPathComponent(
  createGrommetMarker,
  updateGrommetMarker,
);

export default GrommetMarker;
