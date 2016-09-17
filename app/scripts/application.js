class Application {

  constructor() {

    this.createTicker();

    this.createPainter();

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
    let launchPad = new LaunchPad();
    launchPad.position = [100, 100];
  }



}
