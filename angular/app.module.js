(function() {
    'use strict';

    angular
        .module('app', [
            'ui.router',
            'ngMdIcons',
            'ngMaterial',
            'ngSanitize',
            'pascalprecht.translate',

            // Módulos do app
            'app.templates',
            'app.dashboard',
            'app.sidenav',
            'app.users',
            'translations'
        ]);
})();