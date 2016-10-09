/**
 * Created by terjekarlsen on 08.09.2016.
 */



class Rocket extends Paintable {

  constructor(color, width, height){
    super(color, width, height);
    this._tick = 0;
    this._thrust = [0.2,3.5];
    this._vector = new SpeedVector();
    this._isIgnited = false;

  }

  tick(){
    this._tick++;


    if(this._isIgnited){
      // First update the rockets speed vector, then
      // update its next position based on the speed vector.
      this._vector.update(this.thrust);
      this.updatePositionBasedOnVector();
      this.burnFuel();
    }
  }


  /** Updates the speed vector by one increment based on
   * drag, thrust and gravity
   */
  updatePositionBasedOnVector(){
    let p1 = this.position[0] + this._vector.vector[0];
    let p2 = this.position[1] + this._vector.vector[1];

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



  burnFuel(){
    let fX = this._thrust[0];
    let fY = this._thrust[1];

    fX = Math.max(0,fX-0.05);
    fY = Math.max(0,fY-0.05);

    this.thrust = [fX,fY];
  }

  ignite(){
    this._isIgnited = true;
  }


}
