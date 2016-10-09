

class Paintable extends Tickable {

  constructor(color='#000000', width=0, height=0) {
    super();
    this._color = color;
    this._width = width;
    this._height = height;
    this._position = [0,0];
  }

  /** Get the color
   *
   * @returns {String} (hex value)
     */
  get color (){
    return this._color;
  }

  /** Get the width
   *
   * @returns {Integer}
     */
  get width (){
    return this._width;
  }

  get height () {
    return this._height;
  }

  /** Set the position of the launcpad. Position is
   * set as an X Y array, so technically the launchpad could be
   * placed "mid air".
   * @param {Array} pos
   * @return
   */
  set position(pos) {
    if (!Array.isArray(pos)) {
      throw new Error('INVALID_POSITION_ARRAY');
    }
    if (pos.length > 2) {
      throw new Error('INVALID_POSITION_ARRAY');
    }
    if (pos.length < 2) {
      throw new Error('INVALID_POSITION_ARRAY');
    }

    this._position = pos;
  }

  /** Get the position of the launchpad.
   *
   * @returns {Array}
   */
  get position() {
    return this._position;
  }

  paint () {

  }
}

