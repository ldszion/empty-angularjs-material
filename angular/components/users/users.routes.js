(function() {
    'use strict';

    angular
        .module('app.users')
        .config(Routes);

    Routes.$inject = ['$stateProvider'];

    /* @ngInject */
    function Routes($stateProvider) {
        $stateProvider
            .state('app.users', {
                abstract: true,
                url: '/users',
                views: {
                    'content': {
                        template: '<div ui-view="content"></div>'
                    }
                }
            })
            .state('app.users.list', {
                url: '',
                views: {
                    'content': {
                        controller: 'UsersListController as vm',
                        templateUrl: 'users/views/list.html'
                    }
                }
            })
            .state('app.users.new', {
                url: '/new',
                views: {
                    'content': {
                        controller: 'UsersListController as vm',
                        templateUrl: 'users/views/new.html'
                    }
                }
            });
    }
})();