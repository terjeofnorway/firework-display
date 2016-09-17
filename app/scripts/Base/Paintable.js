

class Paintable extends Tickable {

  constructor(color='#000000', width=0, height=0) {
    super();
    this._color = color;
    this._width = width;
    this._height = height;
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

  paint () {

  }
}
