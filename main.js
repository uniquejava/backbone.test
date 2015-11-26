requirejs.config({
    baseUrl: 'js',
    paths: {
        'jquery':  '../bower_components/jquery/dist/jquery',
        'underscore': '../bower_components/underscore/underscore',
        'backbone': '../bower_components/backbone/backbone'
    },
    shim: {
        'underscore': {
            exports: '_'
        }
    }
});

require(['app'], function(App) {
    App.start();

});