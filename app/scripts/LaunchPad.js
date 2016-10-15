/**
 * Created by terjekarlsen on 07.09.2016.
 */


class LaunchPad extends Paintable {

  constructor(color, width, height) {
    super(color, width, height);
    this._rocketInterval = 60;
    this._rocketIntervalCount = 0;
  }



  /** Launch a new rocket
   * @param number
   * @returns {*}
   */
  launchRocket() {
    let rocket = new Rocket('#ffff00', 2, 5);
    rocket.position = [this.position[0] + (this.width/2), this.position[1]];
    rocket.life = 70 + Math.round((Math.random() * 40));
    rocket.radius = 2 + Math.round((Math.random() * 4));
    rocket.fuel = 75;

    rocket.ignite();
  }



  /** Tick the launchpad once
   *
   */
  tick() {
    if (this._rocketIntervalCount < 0) {
      this.launchRocket();

      this._rocketIntervalCount = this._rocketInterval;
    }

    this._rocketIntervalCount -=1;
  }
}
