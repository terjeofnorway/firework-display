class Painter {

  constructor(){

  }

  /** Create a canvas to be returned to caller
   *
   * @returns {Element}
   */
  createCanvas() {
    let canvas = document.createElement('canvas');
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    canvas.style.backgroundColor = '#ff0000';

    return canvas;
  }

  /** Add the created canvas to the DOM document
   *
   * @returns {Element}
   */
  addCanvasToDocument() {
    let canvas = this.createCanvas();
    document.body.appendChild(canvas);
  }

}
