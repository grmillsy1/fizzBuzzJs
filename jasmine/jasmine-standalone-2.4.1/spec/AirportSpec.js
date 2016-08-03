'use strict';

describe('Airport', function(){
  var airport;
  var airport2;
  var plane;
  var weather;

  beforeEach(function(){
    airport = new Airport;
    airport2 = new Airport(5);
    plane = jasmine.createSpyObj('plane', ['land', 'takeOff', 'isAirborne']);
  });

  it('has a default capacity of 10', function(){
    expect(airport.capacity()).toEqual(10);
  });

  it('allows user to set capacity', function(){
    expect(airport2.capacity()).toEqual(5);
  });

  it('sends the land message to plane', function(){
    spyOn(airport, "isStormy").and.returnValue(false);
    airport.land(plane);
    expect(plane.land).toHaveBeenCalled()
  });

  it('sends takeOff message to plane', function(){
    spyOn(airport, "isStormy").and.returnValue(false);
    airport.takeOff(plane);
    expect(plane.takeOff).toHaveBeenCalled()
  });

  it('Adds a plane to the airport array', function(){
    spyOn(airport, "isStormy").and.returnValue(false);
    airport.land(plane);
    expect(airport.hanger).toContain(plane)
  });

  it('takes a plane from the airport array', function(){
    spyOn(airport, "isStormy").and.returnValue(false);
    airport.land(plane);
    airport.takeOff(plane);
    expect(airport.hanger).not.toContain(plane)
  });

  it('prevents land when stormy', function() {
    spyOn(airport, "isStormy").and.returnValue(true);
    expect(function() {airport.land(plane);}).toThrowError('cannot land during storm')
  });

  it('prevents take off when stormy', function() {
    spyOn(airport, "isStormy").and.returnValue(true);
    expect(function() {airport.takeOff(plane);}).toThrowError('cannot take off during storm')
  });

  it('prevents take off when plane is already in flight', function() {
    spyOn(airport, "isStormy").and.returnValue(false);
    plane.isAirborne.and.returnValue(true)
    expect(function() {airport.takeOff(plane);}).toThrowError('plane is already in flight')
  });

  it('prevents landing when plane is not in flight', function() {
    spyOn(airport, "isStormy").and.returnValue(false);
    plane.isAirborne.and.returnValue(false)
    expect(function() {airport.land(plane);}).toThrowError('plane is not in flight')
  });

  it('prevents landing when airport is too full', function() {
    spyOn(airport, "isStormy").and.returnValue(false);
    for (var number = 1; number <= 10; number++) {
            airport.land(plane)
        }
    expect(function() {airport.land(plane);}).toThrowError('airport is full')
  })

});
