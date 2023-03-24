// Generate a draggable marker component.

import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { Box, Text } from 'grommet';

function DraggableMarker({ position, onDragEnd, ...rest }) {
  const markerRef = React.useRef();
  const eventHandlers = {
    dragend() {
      const marker = markerRef.current;
      if (marker != null) {
        onDragEnd(marker.getLatLng());
      }
    },
  };
  return position && (
    <Marker
      ref={markerRef}
      position={position}
      draggable
      eventHandlers={eventHandlers}
      {...rest}
    />
  );
}

export default DraggableMarker;

