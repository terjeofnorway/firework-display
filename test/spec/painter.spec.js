(function () {

  describe('Test application bootstrapping', () => {
      let application;
      let painter;

      beforeEach(() =>{
        painter = new Painter();
      });


    it('should return a canvas containing context', () => {
      let canvas = painter.createCanvas();
      expect(canvas.getContext('2d') instanceof CanvasRenderingContext2D).toBe(true);
    });


  });
})();
