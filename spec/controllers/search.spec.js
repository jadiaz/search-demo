describe('search controller', function() {
    var controller;

    beforeEach(module('search.demo'));

    describe('default controller tests', function() {
        beforeEach(inject(function ($controller) {
            controller = $controller('SearchController');
        }));

        it('should load the search controller when the application is accessed', function() {
            expect(controller).toBeDefined();
        });

        it('should set the title of the page', function() {
            expect(controller.title).toBe('Search Application Technology Demonstrator');
        });

        it('should have a method to allow for searching the web', function() {
            expect(typeof(controller.search)).toBe("function");
        });
    });

    describe('search function', function() {

        var searchController, returnedResults;

        var BingServiceMock = {
            webSearch: function(){},
            imgSearch: function(){},
            newsSearch: function(){}
        };

        var mockResults = [
            {
            "__metadata": {
            "uri": "https://api.datamarket.azure.com/Data.ashx/Bing/Search/Web?Query='xbox'&$skip=0&$top=1",
            "type": "WebResult"
            },
            "ID": "26888c2a-d245-47dc-87de-dc3551249de7",
            "Title": "Xbox | Games and Entertainment on All Your Devices",
            "Description": "Experience the new generation of games and entertainment with Xbox. Play Xbox games and stream video on all your devices.",
            "DisplayUrl": "www.xbox.com",
            "Url": "http://www.xbox.com/"
            },
            {
            "__metadata": {
            "uri": "https://api.datamarket.azure.com/Data.ashx/Bing/Search/Web?Query='xbox'&$skip=1&$top=1",
            "type": "WebResult"
            },
            "ID": "ff23e110-31c2-44f9-be21-f213bcd4c654",
            "Title": "Amazon.com: Xbox - More Systems: Video Games: Games ...",
            "Description": "Online shopping for Video Games from a great selection of Games, Hardware, Computer And Console Video Game Products & more at everyday low prices.",
            "DisplayUrl": "www.amazon.com/Xbox-Games/b?ie=UTF8&node=537504",
            "Url": "http://www.amazon.com/Xbox-Games/b?ie=UTF8&node=537504"
            }
        ];

        beforeEach(inject(function ($controller, $q) {
            var defer = $q.defer();
            defer.resolve(mockResults);
            returnedResults = defer.promise;

            searchController = $controller('SearchController', {BingService: BingServiceMock});
        }));

        it('should call the search service', function() {
            spyOn(BingServiceMock, 'webSearch').and.returnValue(returnedResults);
            searchController.search();
            expect(BingServiceMock.webSearch).toHaveBeenCalled();
        });

        it('should return an array with more than one results', function() {
            expect(Array.isArray(searchController.results)).toBe(true);
        });

        it('should take a string as input', function() {
            pending();
        });
    });

    describe('search function - not mocked', function() {
        var controller;

        beforeEach(module('search.demo.BingService'));

        beforeEach(inject(function ($controller) {
            controller = ('SearchController', {BingService: BingService});
        }));

        it('results should have a title, a description and a url to link to the site', function() {
            pending();
        });
    });
});