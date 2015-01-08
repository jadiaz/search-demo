describe ('Bing Service', function() {
  var bingSvc;
  
  beforeEach(module('search.demo'));

  beforeEach(inject(function ($injector) {
    bingSvc = $injector.get('BingService');
  }));

  it('should set error if no search input is passed in', function () {
    var searchStr = 'xbox';
    var searchResults = []; 
    bingSvc.webSearch(searchStr).then(
      function (data) {
        console.log(data);
        searchResults = data;
      },
      function (error) {
        console.log(error);
      }
    ).catch(function(err){
      console.log(err);
    });

    expect(searchResults.length).not.toBe(0);
  });

  it('should return results based on search query passed in', function () {
    var searchResults = [];
    bingSvc.webSearch('xbox').then(function (data) {
      searchResults = data;
      expect(searchResults.length).toBe(0);
    });
  });

  xit('should send a image query to the Bing API');
  xit('should send a news query to the Bing API');
}); 