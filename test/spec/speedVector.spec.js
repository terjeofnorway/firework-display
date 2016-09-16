
(function() {

  describe('Testing the SpeedVector class', function(){
    let speedVector;

    beforeEach(function(){
      speedVector = new SpeedVector();

    });



    it('should update its vector', function(){
      let beforeVector = speedVector.vector;

      let thrust = [10,10];
      let drag = [-5,-5];

      speedVector.update(thrust, drag);

      let afterVector = speedVector.vector;

      expect(afterVector[0]).toBeGreaterThan(beforeVector[0]);
      expect(afterVector[1]).toBeGreaterThan(beforeVector[1]);
    });
  });


})();
