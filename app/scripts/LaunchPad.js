/**
 * Created by terjekarlsen on 07.09.2016.
 */


class LaunchPad extends Paintable {

  constructor(color, width, height){
    super(color, width, height);
    this._position = [0,0];
    this._armedRockets = [];

    this.rigRocket();
    this.launchRocket(0);
  }

  /** Set the position of the launcpad. Position is
   * set as an X Y array, so technically the launchpad could be
   * placed "mid air".
   * @param {Array} pos
   * @return
   */
  set position (pos){
    if(!Array.isArray(pos)) {throw new Error('INVALID_POSITION_ARRAY');}
    if(pos.length > 2) {throw new Error('INVALID_POSITION_ARRAY');}
    if(pos.length < 2) {throw new Error('INVALID_POSITION_ARRAY');}

    this._position = pos;
  }

  /** Get the position of the launchpad.
   *
   * @returns {Array}
     */
  get position(){
    return this._position;
  }

  /** Rig the rocket and add it to the 'armed list', which
   * is basically rockets available for ignition
   */
  rigRocket(){
    let rocket = new Rocket();
    this._armedRockets.push(rocket);

    return rocket;
  }

  launchRocket(number){
    if(number == undefined){
      number = this._armedRockets.length-1;
    }
    this._armedRockets[number].ignite;
    this._armedRockets.splice(number,1);

    return number;
  }

  tick(){

  }
}
