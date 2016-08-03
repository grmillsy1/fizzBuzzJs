describe('Airport', function() {
  var airport;

  var plane = {
    land : function() {
    }
  };

  beforeEach(function() {
    airport = new Airport();
  });

  describe('capacity', function() {
    it("has a default capacity of 3", function() {
      expect(airport.capacity()).toEqual(3);
    })
  })

  describe('landPlane', function() {
    it("tells the plane to land", function() {
      spyOn(plane, "land");
      airport.landPlane(plane);
      expect(plane.land).toHaveBeenCalled();
    })

    it("adds the plane to the hangar", function() {
      airport.landPlane(plane);
      expect(airport.hangar).toEqual([plane]);
    })
  })
});
