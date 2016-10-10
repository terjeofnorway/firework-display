(function () {

  describe('Test the Painter', () => {
      let application;
      let painter;

      beforeEach(() =>{
        painter = new Painter();
      });


    it('should return a canvas containing context', () => {
      let canvas = painter.createCanvas();
      expect(canvas.getContext('2d') instanceof CanvasRenderingContext2D).toBe(true);
    });

    it('should clear the entire canvas', () => {

      painter._canvasContext.fillStyle = '#ffffff';
      painter._canvasContext.fillRect(0,0,100, 100);

      painter.clearCanvas();

      let imageData = painter._canvasContext.getImageData(10,10,1,1).data;

      expect(imageData[0]).toBe(0);
      expect(imageData[1]).toBe(0);
      expect(imageData[2]).toBe(0);
    })


  });
})();
