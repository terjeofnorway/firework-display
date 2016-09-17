(function () {

  describe('Test application bootstrapping', () => {
      let application;

      beforeEach(() =>{
        application = new Application();
      });


      it('should create an instance of Application', () => {
        expect(application instanceof Application).toBe(true);
      });




  });
})();
