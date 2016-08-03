'use strict';

describe('Airport', function(){
  var airport;
  var airport2;
  var plane;

  beforeEach(function(){
    airport = new Airport;
    airport2 = new Airport(5);
    plane = jasmine.createSpyObj('plane', ['land', 'takeOff']);
  });


  it('has a default capacity of 10', function(){
    expect(airport.capacity()).toEqual(10);
  });

  it('allows user to set capacity', function(){
    expect(airport2.capacity()).toEqual(5);
  });

  it('sends the land message to plane', function(){
    airport.land(plane);
    expect(plane.land).toHaveBeenCalled()
  });

  it('sends takeOff message to plane', function(){
    airport.takeOff(plane);
    expect(plane.takeOff).toHaveBeenCalled()
  });

  it('Adds a plane to the airport array', function(){
    airport.land(plane);
    expect(airport.hanger).toContain(plane)
  });

  it('takes a plane from the airport array', function(){
    airport.land(plane);
    airport.takeOff(plane);
    expect(airport.hanger).not.toContain(plane)
  });
});
