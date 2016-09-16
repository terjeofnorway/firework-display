/**
 * Created by terjekarlsen on 07.09.2016.
 */


class LaunchPad {

  constructor(){
    this._position = [0,0];

    this.addAsTickable();
  }

  set position(pos){

    if(!Array.isArray(pos)) {throw new Error('INVALID_POSITION_ARRAY')}
    if(pos.length > 2) {throw new Error('INVALID_POSITION_ARRAY')}
    if(pos.length < 2) {throw new Error('INVALID_POSITION_ARRAY')}

    this._position = pos;
    return true;
  }


  get position(){
    return this._position;
  }

  addAsTickable() {
    let event = new CustomEvent('ADD_TICKABLE_OBJECT', {'detail':this});
    document.dispatchEvent(event);
  }
}
