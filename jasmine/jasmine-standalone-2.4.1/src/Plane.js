
function Plane(){
  this.airborne = true
};

Plane.prototype.isAirborne = function(){
  return this.airborne;
};

Plane.prototype.land = function(){
  this.airborne = false
};

Plane.prototype.takeOff = function(){
  this.airborne = true
};
