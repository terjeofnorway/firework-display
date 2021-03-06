class Painter {

  constructor(){
    this.addCanvasToDocument();
    this._sprites = new Sprites();

    this._canvasContext;

    document.addEventListener('REPAINT_CANVAS', this.repaintCanvas.bind(this));
  }

  /** Add the created canvas to the DOM document
   *
   * @returns {Element}
   */
  addCanvasToDocument() {
    let canvas = this.createCanvas();
    this._canvasContext = canvas.getContext('2d');
    document.body.appendChild(canvas);
  }

  /** Create a canvas to be returned to caller
   *
   * @returns {Element}
   */
  createCanvas() {
    let canvas = document.createElement('canvas');
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    //canvas.style.backgroundColor = '#ff0000';

    return canvas;
  }


  /** Repaint the entire canvas
   *
   * @param e
     */
  repaintCanvas (e) {
    let _paintableObjectsArray = e.detail;

    this.clearCanvas();

    _paintableObjectsArray.forEach((obj) => {
      this.paintObjectOnCanvas(obj);
    })
  }

  paintObjectOnCanvas (object){
    if(object.position){
      let spriteData = this._sprites.getRandomSpark();

      this._canvasContext.fillStyle = object.color;
      // this._canvasContext.fillRect(object.position[0],object.position[1],object.width,object.height);
      this._canvasContext.drawImage(spriteData, object.position[0],object.position[1]);

    }

  }

  clearCanvas () {
    this._canvasContext.fillStyle = '#000000';
    this._canvasContext.fillRect(0,0,document.body.clientWidth, document.body.clientHeight);
  }


}
