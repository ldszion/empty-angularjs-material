(function() {
    'use strict';

    angular
        .module('app')
        .config(Routes);

    Routes.$inject = ['$stateProvider', '$urlRouterProvider'];

    function Routes($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('/', '/dashboard');
        $urlRouterProvider.when('', '/dashboard');
        $urlRouterProvider.otherwise('/404');
        $stateProvider
            .state('app', {
                abstract: true,
                views: {
                    'index': {
                        templateUrl: 'dashboard/views/structure.html'
                    },
                    'toolbar@app': {
                        templateUrl: 'toolbar/toolbar.html'
                    },
                    'sidenav@app': {
                        templateUrl: 'sidenav/sidenav.html',
                        controller: 'SidenavController as vm'
                    }
                }
            })
            .state('app.dashboard', {
                url: '/dashboard',
                views: {
                    'content': {
                        templateUrl: 'dashboard/views/content-example.html'
                    }
                }
            })
            .state('app.404', {
                url: '/404',
                views: {
                    'index@': {
                        templateUrl: 'dashboard/views/404.html'
                    }
                }
            })
            .state('app.users', {
                url: '/users',
                views: {
                    'content': {
                        controller: 'UsersListController as vm',
                        templateUrl: 'users/views/list.html'
                    }
                }
            });
    }
})();