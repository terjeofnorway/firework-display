(function () {

  describe('Test the Ticker object', () => {
    let ticker;

    beforeEach(() => {
      ticker = new Ticker();

    });


    it('adding a new tickable object should casue the Ticker to add the object to _tickableObjectsArray', function(){
      let oldCount = ticker._tickableObjectsArray.length;
      let rocket = new Rocket();
      let newCount = ticker._tickableObjectsArray.length;

      expect(newCount).toBe(oldCount+1);
    });

    it('calling die() should cause the Ticker to remove the object to _tickableObjectsArray', function(){
      let oldCount = ticker._tickableObjectsArray.length;
      let rocket = new Rocket();
      rocket.die();
      let newCount = ticker._tickableObjectsArray.length;

      expect(newCount).toBe(oldCount);
    });


  });
})();
