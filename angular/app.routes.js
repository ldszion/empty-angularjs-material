(function() {
    'use strict';

    angular
        .module('app')
        .config(Routes);

    Routes.$inject = ['$stateProvider', '$urlRouterProvider'];

    function Routes($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('app', {
                abstract: true,
                views: {
                    'index': {
                        templateUrl: 'dashboard/views/structure.html'
                    }
                }
            })
            .state('app.dashboard', {
                url: '/dashboard',
                views: {

                }
            })
            .state('app.index', {
                url: '/'
            });
    }
})();