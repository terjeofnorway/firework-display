/**
 * Created by terjekarlsen on 08.09.2016.
 */

(function () {

  describe('Testing the spark: ', function () {
    let spark;

    beforeEach(function () {
      spark = new Spark();

      }
    );

    describe('The sparkt', function () {

      it('should tick', function () {
        let oldTick,
          newTick;

        oldTick = spark._tick;
        spark.tick();
        newTick = spark._tick;

        expect(oldTick).toBeLessThan(newTick);
      });

    });


  });

})();
