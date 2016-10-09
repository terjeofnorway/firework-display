/**
 * Created by terjekarlsen on 08.09.2016.
 */



class Rocket extends Paintable {

  constructor(color, width, height){
    super(color, width, height);
    this._tick = 0;
    this._thrust = [0,-2];
    this._drag = [0,0];
    this._vector = new SpeedVector();
    this._isIgnited = false;

  }

  tick(){
    this._tick++;


    if(this._isIgnited){
      // First update the rockets speed vector, then
      // update its next position based on the speed vector.
      this._vector.update(this.thrust, this.drag);
      this.updatePositionBasedOnVector();
    }
  }


  /** Updates the speed vector by one increment based on
   * drag, thrust and gravity
   */
  updatePositionBasedOnVector(){
    let p1 = this.position[0] + this._vector.vector[0];
    let p2 = this.position[1] + this._vector.vector[1] + Physics.GRAVITY;

    this.position = [p1, p2];
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
