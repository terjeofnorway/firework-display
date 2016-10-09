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
          expect(function(){rocket.position = pos}).toThrowError('INVALID_POSITION_ARRAY');
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


      it('should ignite', () => {
        rocket.ignite();
        expect(rocket._isIgnited).toBe(true);
      });


      it('should move according to thrust', function(){
        rocket.position = [0,0];
        rocket.thrust = [2,20];

        rocket.ignite();
        rocket.tick();

        expect(rocket.position[0]).toBeLessThan(0);
        expect(rocket.position[1]).toBeLessThan(0);
      });


      it('should burn fuel', function(){
        let thrustX = rocket.thrust[0];
        let thrustY = rocket.thrust[1];

        rocket.burnFuel();

        expect(rocket.thrust[0]).toBeLessThanOrEqual(Math.max(0, thrustX));
        expect(rocket.thrust[1]).toBeLessThanOrEqual(Math.max(0, thrustY));

      });

    });

  });

})();
