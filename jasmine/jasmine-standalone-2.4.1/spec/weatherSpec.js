'use strict';

describe('Weather', function(){
  var weather;

  beforeEach(function(){
    weather = new Weather;
  });

  it('returns stormy', function(){
    spyOn(Math, 'random').and.returnValue(0.8);
    expect(weather.stormy()).toEqual(true)
  })

  it('returns not stormy', function(){
    spyOn(Math, 'random').and.returnValue(0.1);
    expect(weather.stormy()).toEqual(false)
  })
});
