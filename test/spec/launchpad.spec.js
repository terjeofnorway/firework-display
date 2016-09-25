/**
 * Created by terjekarlsen on 07.09.2016.
 */
(function () {

  describe('Test the LaunchPad class:', function () {
    let launchPad;
    let assignedPosition = [50, 50];

    beforeEach(function () {
      launchPad = new LaunchPad();
    });

    it('should create an instance of LaunchPad', function () {

      expect(launchPad instanceof LaunchPad).toBe(true);

    });


    describe('The launch pad positioning', function () {


      it('should only allow arrays', function () {

        let position = 'foo';
        expect(function(){launchPad.position = position}).toThrowError('INVALID_POSITION_ARRAY');
      });

      it('should only allow arrays of 2 elements', function () {
        let position = [1, 2, 3];
        expect(function(){launchPad.position = position}).toThrowError('INVALID_POSITION_ARRAY');

        position = [1];
        expect(function(){launchPad.position = position}).toThrowError('INVALID_POSITION_ARRAY');

        position = [1, 2];
        expect(launchPad.position = position).toEqual(position);

      });


      it('should remember the position of the launch pad', function () {

        launchPad.position = assignedPosition;

        let newPosition = launchPad.position;
        expect(newPosition).toEqual(assignedPosition);

      });

      it('should a rig rocket', function(){
        let rocket = launchPad.rigRocket();

        expect(rocket instanceof Rocket).toBe(true);

      });

      it('should launch the last rocket if no pos in armedRockets array is given', function(){
        launchPad.rigRocket();
        launchPad.rigRocket();
        launchPad.rigRocket();

        var rocketPos = launchPad.launchRocket();

        expect(rocketPos).toBe(2);
      });

      it('should remove rocket from armed list when launched', function(){
        launchPad.rigRocket();
        launchPad.rigRocket();
        launchPad.rigRocket();

        launchPad.launchRocket(0);

        expect(launchPad._armedRockets.length).toBe(2);

      });



    });

  });
})();
