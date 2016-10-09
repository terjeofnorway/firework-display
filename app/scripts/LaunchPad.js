/**
 * Created by terjekarlsen on 07.09.2016.
 */


class LaunchPad extends Paintable {

  constructor(color, width, height) {
    super(color, width, height);
    this._armedRockets = [];
    this._rocketInterval = 60;
    this._rocketIntervalCount = 0;
  }



  /** Rig the rocket and add it to the 'armed list', which
   * is basically rockets available for ignition
   */
  rigRocket() {
    let rocket = new Rocket('#00ff00', 2, 5);
    rocket.position = this.position;


    this._armedRockets.push(rocket);

    return rocket;
  }

  launchRocket(number) {
    if (number == undefined) {
      number = this._armedRockets.length - 1;
    }

    this._armedRockets[number].ignite();
    this._armedRockets.splice(number, 1);

    return number;
  }

  tick() {
    if (this._rocketIntervalCount < 0) {
      this.rigRocket();

      this.r
      this.launchRocket(0);
      this._rocketIntervalCount = this._rocketInterval;
    }

    this._rocketIntervalCount -=1;
  }
}
