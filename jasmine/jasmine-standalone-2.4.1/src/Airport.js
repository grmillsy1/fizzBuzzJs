function Airport(capacity = 10){
  this.airportCapacity = capacity
  this.hanger = []
};

Airport.prototype.capacity = function() {
  return this.airportCapacity
};

Airport.prototype.land = function(plane) {
  plane.land();
  this.hanger.push(plane);
};

Airport.prototype.takeOff = function(plane) {
  plane.takeOff();
  this.hanger.splice(plane)
};
