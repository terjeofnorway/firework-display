class Application {

  constructor() {

    this.createPainter();

    this.createTicker();


    this.placeLaunchPad();
  }


  /** create an instance of the Painter
   *
   */
  createPainter () {
    this._painter = new Painter();
  }

  /** Create an instance of the Ticker
   *
   */
  createTicker () {
    this._ticker = new Ticker();
  }


  /** Place a launchPad somewhere at the ground
   *
   */
  placeLaunchPad() {
    let launchPad = new LaunchPad('#ff00ff',40,10);
    launchPad.position = [(document.body.clientWidth/2), document.body.clientHeight-10];
  }

}
