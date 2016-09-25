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


      it('should only allow valid positions', function () {
        let invalidPositions = [
          'foo',
          1,
          [1],
          [1,2,3],
          []
        ];

        let validPositions = [
          [0,0],
          [100,100],
          [120.44532, 244.0392134]
        ];

        for(let pos of invalidPositions){
          expect(function(){rocket.position = pos}).toThrowError('INVALID_POSITION');
        }


        for(let pos of validPositions){
          rocket.position = pos;
          expect(rocket.position).toEqual(pos);
        }

      });


      it('should only allow valid thrust', function(){

        let invalidThrust = [
          'foo',
          1,
          [1],
          [1,2,3],
          []
        ];

        let validThrust = [
          [0,0],
          [100,100],
          [120.44532, 244.0392134]
        ];

        for (let thrust of invalidThrust){
          expect(function(){rocket.thrust = thrust}).toThrowError('INVALID_THRUST');
        };

        for (let thrust of validThrust){
          rocket.thrust = thrust;
          expect(rocket.thrust).toEqual(thrust);
        };

      });

      it('should only allow valid drag', function(){
        let invalidDrag = [
          'foo',
          1,
          [1],
          [1,2,3],
          []
        ];

        let validDrag = [
          [0,0],
          [100,100],
          [120.44532, 244.0392134]
        ];

        for (let drag of invalidDrag){
          expect(function(){rocket.drag = drag}).toThrowError('INVALID_DRAG');
        };

        for (let drag of validDrag){
          rocket.drag = drag;
          expect(rocket.drag).toEqual(drag);
        };

      });

      it('should ignite', () => {
        rocket.ignite();
        expect(rocket._isIgnited).toBe(true);
      });


      it('should move according to thrust and drag', function(){
        rocket.position = [0,0];
        rocket.thrust = [2,20];
        rocket.drag = [-1,-1];

        rocket.ignite();
        rocket.tick();

        expect(rocket.position[0]).toBeGreaterThan(0);
        expect(rocket.position[1]).toBeGreaterThan(0);
      });

    });

  });

})();
