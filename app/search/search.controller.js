(function () {
    'use strict';

    angular
        .module('search.demo.search')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['searchservice'];

    function SearchController(searchservice) {
        var vm = this;
        vm.search = search;
        vm.hasResults = false;
        vm.results = [];
        vm.title = 'Type-S: Search Application Technology Demonstrator';

        activate();

        function activate() {
            console.log("[SearchController] controller has been activated.");
        }

        function search() {
            console.log("[SearchController] search button pressed.")
            var results = searchservice.webSearch();
            if (results.length > 0)
                vm.hasResults = true;
            return vm.results = results;
        }
    }
})();