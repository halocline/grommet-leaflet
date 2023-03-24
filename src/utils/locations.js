// Generate a list of 20 random latitude and longitude
// coordinates within the state of Colorado and store the
// coordinates in an array.
export function generateLocations() {
  var locations = [];
  for (var i = 0; i < 20; i++) {
    locations.push([37.0 + Math.random() * 5, -109.0 - Math.random() * 10]);
  }
  return locations;
}

// Given an array of coordinates, find the center of the
// coordinates and return the center as an array.
export function findCenterOfGravity(locations) {
  var center = [0, 0];
  for (var i = 0; i < locations.length; i++) {
    center[0] += locations[i][0];
    center[1] += locations[i][1];
  }
  center[0] /= locations.length;
  center[1] /= locations.length;
  return center;
}

// Given an array of coordinates, find the bounding box
// of the coordinates and return the bounding box as an
// array.
export function findBoundingBox(locations) {
  var bounds = [
    [Infinity, Infinity],
    [-Infinity, -Infinity],
  ];
  for (var i = 0; i < locations.length; i++) {
    bounds[0][0] = Math.min(bounds[0][0], locations[i][0]);
    bounds[0][1] = Math.min(bounds[0][1], locations[i][1]);
    bounds[1][0] = Math.max(bounds[1][0], locations[i][0]);
    bounds[1][1] = Math.max(bounds[1][1], locations[i][1]);
  }
  return bounds;
}

// Given a bounding box, find the center of the bounding
// box and return the center as an array.
export function findCenter(bounds) {
  return [(bounds[0][0] + bounds[1][0]) / 2, (bounds[0][1] + bounds[1][1]) / 2];
}
