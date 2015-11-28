(function() {
    'use strict';

    angular
        .module('app', [
            'ui.router',
            'ngMdIcons',
            'ngMaterial',
            'ngSanitize',
            'ngMessages',
            'ui.utils.masks',
            'pascalprecht.translate',

            // Módulos do app
            'app.templates',
            'app.dashboard',
            'app.sidenav',
            'app.users',
            'translations'
        ]);
})();