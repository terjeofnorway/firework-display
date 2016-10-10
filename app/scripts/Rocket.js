/**
 * Created by terjekarlsen on 08.09.2016.
 */



class Rocket extends Paintable {

  constructor(color, width, height){
    super(color, width, height);
    this._tick = 0;
    this._thrust = 2;
    this._fuel = 0;
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
      this.updateThrust();
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
  updateThrust() {
    this._thrust = this.fuel * 0.04;
  }

  /** Set the thrust of the rocket
   *
   * @param thrust
     */
  set thrust(thrust) {
    if(typeof(thrust) != 'number') { throw new Error('INVALID_THRUST')}

    this._thrust = thrust;
  }


  /** Get the thrust of the rocket
   *
   * @returns {Array|The vector thrust represented by X Y}
     */
  get thrust() {
    return this._thrust;
  }

  set fuel(fuel){
    if(typeof(fuel) != 'number'){ throw new Error('INVALID_FUEL')}
    this._fuel = fuel;
  }

  get fuel(){
    return this._fuel;
  }



  /** Burn off some fuel
   *
   */
  burnFuel(){
    this.fuel -=1;
  }

  /** Igniting the rocked will allow for ticking
   *
   */
  ignite(){
    this._isIgnited = true;
  }


}
