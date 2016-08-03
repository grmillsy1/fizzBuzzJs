'use strict';

describe('Plane', function(){
  var plane;

  beforeEach(function(){
    plane = new Plane();
  });

  it('starts as airborn', function(){
    expect(plane.isAirborne()).toBe(true);
  });

  it('can land', function(){
    plane.land();
    expect(plane.isAirborne()).toEqual(false);
  });

  it('can take off', function(){
    plane.land();
    plane.takeOff();
    expect(plane.isAirborne()).toBe(true);
  });
});
