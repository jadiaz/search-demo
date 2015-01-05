(function () {
    'use strict';

    var core = angular.module('search.demo.core');

    var config = {
        appTitle: 'Type-S',
        version: '1.0.0'
    };

    core.value('config', config);
    core.config(configure);

    function configure($routeProvider) {

        $routeProvider.when("/", {
            controller: "",
            templateUrl: ""
        });

        $routeProvider.otherwise({ redirectTo: "/" });
    }
})