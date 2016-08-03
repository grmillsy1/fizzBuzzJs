function Airport() {
  this.airportCapacity = 3;
  this.hangar = [];
}

Airport.prototype.capacity = function() {
  return this.airportCapacity;
};

Airport.prototype.landPlane = function(plane) {
  plane.land();
  this.hangar.push(plane);
};
