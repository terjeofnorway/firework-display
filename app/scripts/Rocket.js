/**
 * Created by terjekarlsen on 08.09.2016.
 */


class Rocket extends Paintable {

  constructor(){
    super();
    this._tick = 0;
    this._position = [0,0];
    this._thrust = [0,0];
    this._drag = [-1,-1];
    this._vector = new SpeedVector();
    this._isIgnited = false;

  }

  tick(){
    this._tick++;

    if(this._isIgnited){
      this.position[0];
    }
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
    if(!Array.isArray(pos)) { throw new Error('INVALID_POSITION')}
    if(pos.length < 2 || pos.length > 2) {throw new Error('INVALID_POSITION')}
    this._position = pos;
  }


  /** Set the thrust of the rocket
   *
   * @param thrust
     */
  set thrust(thrust) {
    if(!Array.isArray(thrust)) { throw new Error('INVALID_THRUST')}
    if(thrust.length < 2 || thrust.length > 2) {throw new Error('INVALID_THRUST')}
    this._thrust = thrust;
  }


  /** Get the thrust of the rocket
   *
   * @returns {Array|The vector thrust represented by X Y}
     */
  get thrust() {
    return this._thrust;
  }


  /** Set the drag
   *
   * @param drag
     */
  set drag(drag) {
    if(!Array.isArray(drag)) { throw new Error('INVALID_DRAG')}
    if(drag.length < 2 || drag.length > 2) {throw new Error('INVALID_DRAG')}
    this._drag = drag;
  }

  /** Get the drag
   *
   * @returns {Array|The drag vector represented by X Y}
     */
  get drag() {
    return this._drag;;
  }


  ignite(){
    this._isIgnited = true;
  }







}
