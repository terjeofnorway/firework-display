(function () {

  describe('Test application bootstrapping', function () {

      it('should create an application', function () {

        let application = new Application();

        expect(application instanceof Application).toBe(true);
      });
  });
})();
