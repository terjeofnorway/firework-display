class Spark extends Paintable {

  constructor(degree){
    super('#ff0000',2,2);
    this._life = 100;
    this._weight = 0.1;
    this._vector = new SpeedVector(this._weight);

    this._vector.setVectorFromDegree(degree);
  }

  tick(){
    this._tick++;
    this.updatePositionBasedOnVector();
    this._vector.update();
  }

  updatePositionBasedOnVector(){
    let p1 = this.position[0] + this._vector.vector[0];
    let p2 = this.position[1] + this._vector.vector[1];

    this.position = [p1, p2];
  }



}
