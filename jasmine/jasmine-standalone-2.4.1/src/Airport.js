function Airport(capacity = 10){
  this.airportCapacity = capacity
  this.hanger = []
  this.weather = new Weather();
};

Airport.prototype.capacity = function() {
  return this.airportCapacity
};

Airport.prototype.land = function(plane) {
  if (this.isStormy()) {
    throw new Error('cannot land during storm');
  }
  else if (plane.isAirborne() == false) {
    throw new Error('plane is not in flight');
  }
  else if (this.hanger.length >= this.airportCapacity) {
    throw new Error('airport is full');
  }
  plane.land();
  this.hanger.push(plane);
};

Airport.prototype.takeOff = function(plane) {
  if (this.isStormy()) {
    throw new Error('cannot take off during storm');
  }
  else if (plane.isAirborne() == true) {
    throw new Error('plane is already in flight');
  }
  plane.takeOff();
  this.hanger.splice(plane)
};

Airport.prototype.isStormy = function() {
  return this.weather.stormy();
};
