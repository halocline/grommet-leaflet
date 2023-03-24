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
export function findCenter(locations) {
  var center = [0, 0];
  for (var i = 0; i < locations.length; i++) {
    center[0] += locations[i][0];
    center[1] += locations[i][1];
  }
  center[0] /= locations.length;
  center[1] /= locations.length;
  return center;
}
