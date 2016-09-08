/**
 * Created by terjekarlsen on 08.09.2016.
 */

(function () {

  describe('Testing the rocket: ', function () {
    let rocket;

    beforeEach(function () {
      rocket = new Rocket();

      }
    );

    describe('The rocket', function () {

      it('should tick', function () {
        let oldTick,
          newTick;

        oldTick = rocket._tick;
        rocket.tick();
        newTick = rocket._tick;

        expect(oldTick).toBeLessThan(newTick);
      });

      it('should return its position as array.', function(){
        let position = rocket.position;

        expect(Array.isArray(position)).toEqual(true);
      });

      it('should remember and return its position.', function(){
        let fauxPosition,
          currentPosition;

        fauxPosition = [100,100];
        rocket.position = fauxPosition;
        currentPosition = rocket.position;

        expect(fauxPosition).toEqual(currentPosition);
      });

    })

  })

})();
