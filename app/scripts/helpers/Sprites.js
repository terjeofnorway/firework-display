class Sprites{

  constructor(){
    this._image;
    this.loadSparks();
  }

  loadSparks(){
    this._image = new Image();
    this._image.src = 'images/spritesheet_sparks.png';
  }


  getRandomSpark() {
    return this._image;
  }
}
