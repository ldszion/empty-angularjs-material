(function() {
    'use strict';

    angular
        .module('app.users')
        .controller('UsersListController', UsersListController);

    UsersListController.$inject = [];

    function UsersListController() {
        var vm = this;
        vm.title = "UsersListController";
        vm.users = [{
            id: 1,
            name: 'Polyana Ferreira Souza de Ávila Santos',
            imageUrl: 'http://lorempixel.com/50/50/people/9',
            profile: 'Usuário',
            stake: 'Brasília',
            ward: 'Guará II',
        }, {
            id: 2,
            name: 'Marco Túlio de Ávila Santos',
            imageUrl: 'http://lorempixel.com/50/50/people/10',
            profile: 'Administrador',
            stake: 'Brasília',
            ward: 'Guará II',
        }];
    }
})();