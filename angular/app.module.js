(function() {
    'use strict';

    angular
        .module('app', [
            'ui.router',
            'ngMdIcons',
            'ngMaterial',

            // Módulos do app
            'app.templates',
            'app.dashboard',
        ]);
})();