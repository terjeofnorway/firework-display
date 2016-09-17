/**
 * Created by terjekarlsen on 07.09.2016.
 */
(function () {

  describe('Test the Paintable class:', function () {
    let eventSpy;
    let color;
    let width;
    let height;
    let paintable;

    beforeEach(() => {
      color = 'aabbcc';
      width = 50;
      height = 50;
      paintable = new Paintable (color, width, height);
    });

    it('should create a Paintable instantiation', () =>{
      expect (paintable instanceof Paintable).toBe(true);
    });


    it('should return the correct color as set on instantiation', function(){
      expect(paintable.color).toBe(color);
    });

    it('should return the correct width as set on instantiation', function(){
      expect(paintable.width).toBe(width);
    });

    it('should return the correct height as set on instantiation', function(){
      expect(paintable.height).toBe(height);
    });


  });
})();
