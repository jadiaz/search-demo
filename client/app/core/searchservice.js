(function () {
    'use strict';

    angular
        .module('search.demo.core')
        .factory('searchservice', searchservice);

    function searchservice() {
        var service = {
            webSearch: queryWeb,
            imgSearch: queryImages,
            newsSearch: queryNews
        };

        return service;

        function queryWeb() {
            return getSampleSearchResults();
        }

        function queryImages() {
            return getSampleSearchResults();
        }

        function queryNews() {
            return getSampleSearchResults();
        }

        function getSampleSearchResults() {
            return [
                { title: 'sample title 1', description: 'sample description', link: 'http://www.bing.com' },
                { title: 'sample title 2', description: 'sample description', link: 'http://www.bing.com' },
                { title: 'sample title 3', description: 'sample description', link: 'http://www.bing.com' },
                { title: 'sample title 4', description: 'sample description', link: 'http://www.bing.com' },
                { title: 'sample title 5', description: 'sample description', link: 'http://www.bing.com' },
                { title: 'sample title 6', description: 'sample description', link: 'http://www.bing.com' },
                { title: 'sample title 7', description: 'sample description', link: 'http://www.bing.com' },
                { title: 'sample title 8', description: 'sample description', link: 'http://www.bing.com' },
                { title: 'sample title 9', description: 'sample description', link: 'http://www.bing.com' },
                { title: 'sample title 10', description: 'sample description', link: 'http://www.bing.com' }
            ];
        }
    }
})();