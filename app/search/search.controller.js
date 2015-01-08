(function () {
    'use strict';

    angular
        .module('search.demo.search')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['BingService'];

    function SearchController(searchservice) {
        var vm = this;
        vm.searchOperation = 'Web';
        vm.search = search;
        vm.searchType = setOperation;
        vm.query = "";
        vm.hasResults = false;
        vm.results = [];
        vm.title = 'Search Application Technology Demonstrator';

        activate();

        function activate() {
        }

        function setOperation(type) {
            vm.searchOperation = type;
            this.search();
        }

        function search() {
            var results = [];

            if (vm.query)
            {
                searchservice.query ( 
                    { 
                        service: vm.searchOperation, 
                        Query: "'" + vm.query + "'" 
                    }, 
                    function (data) {
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