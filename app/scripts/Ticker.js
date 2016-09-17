class Ticker {

  constructor () {
    document.addEventListener('ADD_TICKABLE_OBJECT', this.addTickableObject.bind(this));
    document.addEventListener('REMOVE_TICKABLE_OBJECT', this.removeTickableObject.bind(this));

    this._tickableObjectsArray = new Array();

    this.tick();
  }


  /** Adds a tickable object (received via ADD_TICKABLE_OBJECT event
   * into the _tickableObjectsArray.
   * @param e
     */
  addTickableObject(e) {
    let tickableObject = e.detail;
    this._tickableObjectsArray.push(tickableObject);
  }

  /** Removes a tickable object (received via REMOVE_TICKABLE_OBJECT event
   *
   * @param e
     */
  removeTickableObject(e) {
    let tickableObject = e.detail;

    this._tickableObjectsArray.forEach((object,index) =>{
      if(object == tickableObject){
        this._tickableObjectsArray.splice(index,1);
      }
    });
  }

  /** This is the master tick which will loop through the
   * _tickableObjectsArray and call tick() on all of them.
   *
   */
  tick() {

    // Set timeout
    setTimeout(this.tick.bind(this), 1000);

  }
}
