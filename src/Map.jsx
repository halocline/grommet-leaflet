import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { MapContainer, Marker, Popup, Rectangle, TileLayer, ZoomControl } from 'react-leaflet';
import { Box, Text } from 'grommet';

import MarkerClusterGroup from './MarkerClusterGroup';
import Square from './Sqaure';
import {centerGravityIcon, grommetIcon} from './myIcon';
import { findBoundingBox, findCenter, findCenterOfGravity, generateLocations } from './utils/locations';

function Map() {
  const [geolocation, setGeolocation] = useState();
  const [locations, setLocations] = useState([]);
  const [center, setCenter] = useState(geolocation);
  const [centerOfGravity, setCenterOfGravity] = useState(geolocation);
  const [zoom, setZoom] = useState(6);
  const containerRef = useRef();
  const mapContainerRef = useRef();

  const adjustSize = () => {
    const map = document.getElementById('map');
    if (containerRef.current && map) {
      const {height} = containerRef.current.getBoundingClientRect();
      map.style.height = `${height}px`;
    }
  };

  // Get geolocation on mount
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const nextLocation = [
          position.coords.latitude,
          position.coords.longitude,
        ];
        setGeolocation(nextLocation);
        localStorage.setItem('geolocation', JSON.stringify(nextLocation));
      },
      () => {
        const stored = localStorage.getItem('geolocation');
        if (stored) {
          setGeolocation(JSON.parse(stored));
        }
      },
    );
  }, []);

  // Adjust map size on window resize
  useEffect(() => {
    window.addEventListener('resize', adjustSize);
    return () => window.removeEventListener('resize', adjustSize);
  });

  useLayoutEffect(adjustSize);

  // Generate random locations
  useEffect(() => {
    const nextLocations = generateLocations(250);
    setLocations(nextLocations);
  }, []);

  // Find center of locations
  useEffect(() => {
    if (locations.length) {
      const nextCenter = findCenter(findBoundingBox(locations));
      setCenter(nextCenter);
    }
  }, [locations]);

  // Find center of gravity of locations
  useEffect(() => {
    if (locations.length) {
      const nextCenterOfGravity = findCenterOfGravity(locations);
      setCenterOfGravity(nextCenterOfGravity);
    }
  }, [locations]);

  return (
    <>
    <Box><Text>Zoom: {zoom}</Text></Box>
    <Box ref={containerRef} flex background="background-contrast">
      {geolocation && (
        <MapContainer
          id="map"
          ref={mapContainerRef}
          center={center}
          zoom={zoom}
          scrollWheelZoom={false}
        >
          {/* <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          /> */}
          <TileLayer
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          />
          <ZoomControl position="bottomright" />
          <Marker position={geolocation}>
            <Popup>
              {geolocation[0].toFixed(2)} {geolocation[1].toFixed(2)}
            </Popup>
          </Marker>
          <MarkerClusterGroup>
          {locations.map((location, index) => (
            location && <Marker key={index} position={location}>
              <Popup>
                {location[0].toFixed(2)} {location[1].toFixed(2)}
              </Popup>
            </Marker>
          ))}
          </MarkerClusterGroup>
          {center && <Marker position={center} icon={grommetIcon({})}>
            <Popup>
              {center[0].toFixed(2)} {center[1].toFixed(2)}
            </Popup>
          </Marker>}
          {centerOfGravity && <Marker position={centerOfGravity} icon={centerGravityIcon}>
            <Popup>
              {centerOfGravity[0].toFixed(2)} {centerOfGravity[1].toFixed(2)}
            </Popup>
          </Marker>}
          <Rectangle bounds={locations} pathOptions={{color: 'grey'}} />
        </MapContainer>
      )}
    </Box>
    </>
  );
}

export default Map;
