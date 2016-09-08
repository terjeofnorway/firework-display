/**
 * Created by terjekarlsen on 08.09.2016.
 */

class Rocket {

  constructor(){
    this._tick = 0;
    this._position = [0,0];
    this._thrust = [0,0];
    this._drag = [-1,-1];
    this._vector = [0,0];

  }

  tick(){
    this._tick++;
  }

  /** Get the current position of the rocket
   *
   * @returns {Array|Represented by X Y}
     */
  get position(){
    return this._position;
  }



  /** Set the current position of the rocket
   *
   * @param pos Array represented by X Y
     */
  set position(pos){
    this._position = pos;
  }



}
