/**
 * Created by terjekarlsen on 07.09.2016.
 */

class LaunchPad {

  constructor(){
    this._position = [0,0];
  }


  setPosition(pos){

    if(!Array.isArray(pos)) {return false;}
    if(pos.length > 2) {return false;}
    if(pos.length < 2) {return false;}

    this._position = pos;
    return true;
  }


  getPosition(){
    return this._position;
  }
}
