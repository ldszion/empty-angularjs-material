(function() {
    'use strict';

    angular
        .module('app', [
            'ui.router',
            'ngMdIcons',
            'ngMaterial',
            'ngSanitize',
            'ngMessages',
            'restangular',
            'angular-loading-bar',
            'ui.utils.masks',
            'pascalprecht.translate',

            // Módulos do app
            'translations',
            'app.core',
            'app.templates',
            'app.dashboard',
            'app.sidenav',
            'app.users',
            'app.auth',
        ]);
})();