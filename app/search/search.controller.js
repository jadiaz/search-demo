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
        vm.showWeb = true;
        vm.showImages = false;
        vm.showNews = false;
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
                    vm.showWeb = true;
                    vm.showImages = false;
                    vm.showNews = false;
                    _top = '25';
                    break;
                case 'Image':
                    vm.searchOperation = 'Image';
                    vm.showWeb = false;
                    vm.showImages = true;
                    vm.showNews = false;
                    _top = '25';
                    break;
                case 'News':
                    vm.searchOperation = 'News';
                    vm.showWeb = false;
                    vm.showImages = false;
                    vm.showNews = true;
                    _top = '25';
                    break;
                default:
                    vm.searchOperation = 'Web';
                    vm.showWeb = true;
                    vm.showImages = false;
                    vm.showNews = false;
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
                        q: "'" + vm.query + "'"
                    }, 
                    function (data) {
                        console.log(data);
                        vm.hasResults = true;
                        vm.results.push(data.webPages);
                        vm.results.push(data.images);
                        return vm.results;
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