/**
 * Created by terjekarlsen on 10.09.2016.
 */

class SpeedVector {

  constructor(weight = 0.5){
    this._xSpeed = (Math.random() - 0.5) * 10;
    this._ySpeed = 0;
    this._weight = weight
  }


  get vector(){
    return [this._xSpeed, this._ySpeed];
  }

  set vector(vector){
    this._xSpeed = vector[0];
    this._ySpeed = vector[1];
  }

  /** Update the speed according to drag, thrust and other physics.
   *  All physics logic is controllet by SpeedVector.
   *
   * @param thrust
   * @param drag
     */
  update(thrust = 0){

    let deltaY = ((thrust * -1) + (Physics.GRAVITY * -1)) * this._weight;

    this._ySpeed += deltaY;
  }


  /** Set the vector by calculating
   * from degrees
   * @param degree
     */
  setVectorFromDegree(degree, thrust){
    let subDegree;
    let directionalThrust = ((thrust * -1) + (Physics.GRAVITY * -1)) * 0.5;
    let xSpeed;
    let ySpeed;

    if(degree >= 0 && degree <= 90){
      subDegree = degree;
      ySpeed = Math.cos(subDegree) * directionalThrust;
      xSpeed = Math.sqrt(directionalThrust-ySpeed);

    } else if (degree >= 91 && degree >= 180){
      subDegree = degree - 90;



    } else if (degree >= 181 && degree >= 270){
      subDegree = degree - 180;



    } else {
      subDegree = degree - 270;




    }

  }

}


