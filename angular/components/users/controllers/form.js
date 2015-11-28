(function() {
    'use strict';

    angular
        .module('app.users')
        .controller('UserFormController', UserFormController);

    UserFormController.$inject = ['$timeout', '$rootScope', '$scope'];

    function UserFormController($timeout, $rootScope, $scope) {
        var vm = this;

        vm.user = {};
        vm.user.gender = 'male';
        vm.submit = submit;
        vm.loadWards = loadWards;
        vm.stakes = [
            {id: 1, name: 'Brasília'},
            {id: 2, name: 'Brasília Norte'}
        ];
        vm.wards = null;

        activate();

        ///////////////////////////////////////

        function activate() {
            vm.genders = [{
                label: 'users.MALE',
                value: 'male',
            }, {
                label: 'users.FEMALE',
                value: 'female',
            }];

        }

        function submit() {
            console.log(vm.user);
        }

        function loadWards() {
            console.log('selected stake', vm.user.stake);
            vm.wards = [
                {id: 2, name: 'Asa Sul'},
                {id: 1, name: 'Guará I'},
            ];
        }
    }
})();