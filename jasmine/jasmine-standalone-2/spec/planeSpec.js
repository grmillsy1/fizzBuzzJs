describe('Plane', function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it("shows the plane as airborne", function() {
    expect(plane.isAirborne()).toEqual(true);
  });

describe('land', function() {
  it("changes the planed to landed status", function() {
  plane.land();
  expect(plane.isAirborne()).toEqual(false);
  })
})

describe('takeOff', function() {
  it("changes the planed to airborne status", function() {
  plane.land();
  plane.takeOff();
  expect(plane.isAirborne()).toEqual(true);
  })
})

});
