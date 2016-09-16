(function () {

  describe('Test application bootstrapping', () => {
      let application;

      beforeEach(() =>{
        application = new Application();
      });


      it('should create an instance of Application', () => {
        expect(application instanceof Application).toBe(true);
      });

      it('should return a canvas containing context', () => {
        let canvas = application.createCanvas();
        expect(canvas.getContext('2d') instanceof CanvasRenderingContext2D).toBe(true);
      });


  });
})();
