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
          [1],
          [1,2,3],
          []
        ];

        let validThrust = [
          1,
          2,
          3
        ];

        for (let thrust of invalidThrust){
          expect(function(){rocket.thrust = thrust}).toThrowError('INVALID_THRUST');
        };

        for (let thrust of validThrust){
          rocket.thrust = thrust;
          expect(rocket.thrust).toEqual(thrust);
        };

      });

      it('should only allow valid fuel', function(){

        let invalidFuel = [
          'foo',
          [1],
          [1,2,3],
          []
        ];

        let validFuel = [
          1,
          2,
          3
        ];

        for (let fuel of invalidFuel){
          expect(function(){rocket.fuel = fuel}).toThrowError('INVALID_FUEL');
        };

        for (let fuel of validFuel){
          rocket.fuel = fuel;
          expect(rocket.fuel).toEqual(fuel);
        };

      });


      it('should ignite', () => {
        rocket.ignite();
        expect(rocket._isIgnited).toBe(true);
      });

      it('should update thrust', () => {
        rocket.fuel = 100;
        rocket.thrust = 0;

        rocket.updateThrust();

        expect(rocket.thrust).toBeGreaterThan(0);

      });


      it('should move according to thrust', function(){
        rocket.position = [0,0];
        rocket.thrust = 3;

        rocket.ignite();
        rocket.tick();

        expect(rocket.position[1]).toBeLessThan(0);
      });


      it('should burn fuel', function(){
        let beforeFuel = 3;
        rocket.fuel = beforeFuel;

        rocket.burnFuel();

        expect(rocket.fuel).toBeLessThanOrEqual(Math.max(0, beforeFuel));

      });

    });

  });

})();
