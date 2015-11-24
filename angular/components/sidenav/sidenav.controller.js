(function() {
    'use strict';

    angular
        .module('app.sidenav')
        .controller('SidenavController', SidenavController);

    SidenavController.$inject = [];

    function SidenavController() {
        var vm = this;
        vm.menus = [{
            text: 'sidenav.PANEL',
            icon: 'action:dashboard',
            sref: 'app.dashboard'
        }, {
            text: 'sidenav.USERS',
            icon: 'social:people',
            sref: 'app.users'
        }];
    }
})();