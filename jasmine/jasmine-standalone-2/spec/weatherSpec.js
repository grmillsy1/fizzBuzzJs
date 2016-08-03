describe('Weather', function() {
  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

  describe('isStormy', function() {
    it("returns false when the number is <= 7", function() {
      spyOn(Math, "random").and.returnValue(0.5);
      expect(weather.isStormy()).toEqual(false);
    })
    it("returns true when the number is > 7", function() {
      spyOn(Math, "random").and.returnValue(0.8);
      expect(weather.isStormy()).toEqual(true);
    })
  })
});
