(function () {

  describe('Test application bootstrapping', function () {

      it('should create an instance of Application', function () {

        let application = new Application();

        expect(application instanceof Application).toBe(true);
      });


  });
})();
