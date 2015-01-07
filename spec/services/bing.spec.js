describe ('Bing Service', function() {
  var bingSvc;
  
  beforeEach(module('search.demo'));

  beforeEach(inject(function ($injector) {
    bingSvc = $injector.get('BingService');
  }));

  it('should allow a generic web search to be made', function () {
    pending();
  });

  xit('should send a image query to the Bing API');
  xit('should send a news query to the Bing API');
});