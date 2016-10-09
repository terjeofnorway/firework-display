class Tickable{

  constructor(){
    this.addAsTickable();
  }

  /** The object is ready to die and stops being tickable
   *
   */
  die() {
    this.removeAsTickabke();
  }

  /** Ticks the object state by 1 tick
   *
   */
  tick (){

  }

  /** Fires and event that tells any listener that this object is tickable.
   * This event only fire at object instantiation
   *
   */
  addAsTickable() {
    let event = new CustomEvent('ADD_TICKABLE_OBJECT', {'detail':this});
    document.dispatchEvent(event);
  }


  /** Fires an event telling any listeners that this object is no
   * longer tickable. Ie. when the object is set for death or is to
   * time-freeze.
   */
  removeAsTickabke() {
    let event = new CustomEvent('REMOVE_TICKABLE_OBJECT', {'detail':this});
    document.dispatchEvent(event);
  }

}

