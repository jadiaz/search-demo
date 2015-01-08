describe ('Bing Service', function() {
  var bingSvc;
  
  beforeEach(module('search.demo'));

  beforeEach(inject(function ($injector) {
    bingSvc = $injector.get('BingService');
  }));

  it('should set error if no search input is passed in', function () {
    // var searchStr = '';
    // var srvOp = 'Webs';
    // var error;

    // console.log(bingSvc.query());

    // bingSvc.query({ Query: "'" + searchStr + "'", service: srvOp}, 
    //   function (data) {
    //     console.log(data);
    //   },
    //   function (err) {
    //     console.log(err);
    //     expect(err).toBeDefined();
    //   }
    // );
  });

  it('should return results based on search query passed in', function () {
    // var searchStr = 'xbox';

    // bingSvc.query({ Query: "'" + searchStr + "'", service: 'Web'}, 
    //   function (data) {
    //     console.log(data);
    //     expect(data.d.results.length).not.toBe(0);
    //   }
    // );
  });

  xit('should send a image query to the Bing API');
  xit('should send a news query to the Bing API');
}); 