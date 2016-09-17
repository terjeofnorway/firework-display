class Application {

  constructor() {
    this._tickArray = new Array();


    this.prepareTick();

    this.addCanvasToDocument();
    this.placeLaunchPad();


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


  /** Place a launchPad somewhere at the ground
   *
   */
  placeLaunchPad() {
    let launchPad = new LaunchPad();
    launchPad.position = [100, 100];
  }

  prepareTick() {
    document.addEventListener('ADD_TICKABLE_OBJECT', this.addTickableObject.bind(this));
    document.addEventListener('REMOVE_TICKABLE_OBJECT', this.removeTickableObject);

    this.tick();
  }

  addTickableObject(e) {

    let tickableObject = e.detail;

    this._tickArray.push(tickableObject);

  }

  removeTickableObject(e) {

  }

  tick() {

    // Set timeout
    setTimeout(this.tick.bind(this), 1000);

  }

}
