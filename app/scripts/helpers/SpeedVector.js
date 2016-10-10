/**
 * Created by terjekarlsen on 10.09.2016.
 */

class SpeedVector {

  constructor(){
    this._xSpeed = 0;
    this._ySpeed = 0;

  }

  get vector(){
    return [this._xSpeed, this._ySpeed];
  }

  /** Update the speed according to drag, thrust and other physics.
   *  All physics logic is controllet by SpeedVector.
   *
   * @param thrust
   * @param drag
     */
  update(thrust){

    let deltaY = (thrust * -1) + (Physics.GRAVITY * -1);

    this._ySpeed += deltaY / 2;

  }

}


