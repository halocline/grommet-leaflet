export function generateLocations(n) {
  var locations = [];
  for (var i = 0; i < n; i++) {
    locations.push([45.0 - Math.random() * 15, -75.0 - Math.random() * 50]);
  }
  return locations;
}

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

export function findCenter(bounds) {
  return [(bounds[0][0] + bounds[1][0]) / 2, (bounds[0][1] + bounds[1][1]) / 2];
}

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
