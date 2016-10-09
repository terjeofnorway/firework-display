
(function() {

  describe('Testing the SpeedVector class', function(){
    let speedVector;

    beforeEach(function(){
      speedVector = new SpeedVector();

    });



    it('should update its vector', function(){
      let beforeVector = speedVector.vector;

      let thrust = [10,10];

      speedVector.update(thrust);

      let afterVector = speedVector.vector;

      expect(afterVector[0]).toBeLessThan(beforeVector[0]);
      expect(afterVector[1]).toBeLessThan(beforeVector[1]);
    });
  });


})();
