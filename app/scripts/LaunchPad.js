/**
 * Created by terjekarlsen on 07.09.2016.
 */


class LaunchPad extends Paintable {

  constructor(color, width, height){
    super(color, width, height);
    this._position = [0,0];
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

  tick(){

  }
}
