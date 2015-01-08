(function () {
    'use strict';

    angular
        .module('search.demo.search')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['BingService'];

    function SearchController(searchservice) {
        var vm = this;
        vm.search = search;
        vm.query = "";
        vm.hasResults = false;
        vm.results = [];
        vm.title = 'Search Application Technology Demonstrator';

        activate();

        function activate() {
            console.log("[SearchController] controller has been activated.");
        }

        function search() {
            console.log("[SearchController] search button pressed.")
            var results = [];

            if (vm.query)
            {
                searchservice.query ( 
                    { 
                        service: 'Web', 
                        Query: "'" + vm.query + "'" 
                    }, 
                    function (data) {
                        console.log(data);
                        vm.hasResults = true;
                        return vm.results = data.d.results;
                    }, 
                    function (error) { 
                        console.log( 'Service call returned: ' + error.statusText + ' (' + error.status + ')'); 
                    }
                );
            }
            else
            {
                vm.hasResults = false;
            }

        }
    }
})();