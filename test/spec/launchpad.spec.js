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
        expect(launchPad.setPosition(position)).toBe(false);
      });

      it('should only allow arrays of 2 elements', function () {
        let position = [1, 2, 3];
        expect(launchPad.setPosition(position)).toBe(false);

        position = [1];
        expect(launchPad.setPosition(position)).toBe(false);

        position = [1, 2];
        expect(launchPad.setPosition(position)).toBe(true);

      });


      it('should remember the position of the launch pad', function () {

        launchPad.setPosition(assignedPosition);

        let newPosition = launchPad.getPosition();
        expect(newPosition).toBe(assignedPosition);

      });
    });

  });
})();
