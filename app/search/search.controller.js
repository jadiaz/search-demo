(function () {
    'use strict';

    angular
        .module('search.demo.search')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['BingService'];

    function SearchController(searchservice) {
        var vm = this;
        var _top = '25';

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
            switch (type) {
                case 'Web':
                    vm.searchOperation = 'Web';
                    _top = '25';
                    break;
                case 'Image':
                    vm.searchOperation = 'Image';
                    _top = '25';
                    break;
                case 'News':
                    vm.searchOperation = 'News';
                    _top = '25';
                    break;
                default:
                    vm.searchOperation = 'Web';
                    _top = '25';
            }
            this.search();
        }

        function search() {
            var results = [];

            if (vm.query)
            {
                searchservice.query ( 
                    { 
                        service: vm.searchOperation, 
                        Query: "'" + vm.query + "'",
                        $top: _top
                    }, 
                    function (data) {
                        console.log(data.d);
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