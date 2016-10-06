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

    it('should clear the entire canvas', () => {

      painter._canvasContext.fillStyle = '#000000';
      painter._canvasContext.fillRect(0,0,100, 100);

      painter.clearCanvas();


      let imageData = painter._canvasContext.getImageData(10,10,1,1).data;

      console.log(imageData);

      expect(imageData[0]).toBe(255);
      expect(imageData[1]).toBe(255);
      expect(imageData[2]).toBe(255);
    })


  });
})();
