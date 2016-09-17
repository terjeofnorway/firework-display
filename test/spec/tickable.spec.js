/**
 * Created by terjekarlsen on 07.09.2016.
 */
(function () {

  describe('Test the Tickable class:', function () {
    let eventSpy;

    beforeEach(() => {
      eventSpy = jasmine.createSpy('customEvent');

    });

    it('should fire an ADD_TICKABLE_OJECT event at instantiation', () =>{

      document.addEventListener('ADD_TICKABLE_OBJECT', eventSpy);
      let tickable = new Tickable();

      expect(eventSpy).toHaveBeenCalled();
    });

    it('should attach an object referance as part of the ADD_TICKABLE_OJECT event', function(){
      let tickTarget,
        tickable;

      document.addEventListener('ADD_TICKABLE_OBJECT', (e) => {
        tickTarget = e.detail;
      });

      tickable = new Tickable();

      expect(tickTarget instanceof Tickable).toBe(true);
    });



    it('should fire and REMOVE_TICKABLE_OBJECT event at die()', () => {
      document.addEventListener('REMOVE_TICKABLE_OBJECT', eventSpy);
      let tickable = new Tickable();
      tickable.die();

      expect(eventSpy).toHaveBeenCalled();
    });



    it('should attach an object referance as part of the REMOVE_TICKABLE_OJECT event', function(){
      let tickTarget,
        tickable;

      document.addEventListener('REMOVE_TICKABLE_OBJECT', (e) => {
        tickTarget = e.detail;
      });

      tickable = new Tickable();
      tickable.die();

      expect(tickTarget instanceof Tickable).toBe(true);
    });



  });
})();
