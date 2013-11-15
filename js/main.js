requirejs.config({
    waitSeconds: 0,
    shim: {
        'libs/backbone':{
            deps: ['libs/underscore'],
            exports: 'Backbone'
        },
        'libs/jquery': {
            exports: '$'
        },
        'libs/underscore':{
            exports: '_'
        }
    }
});

require(['app'],function(App){
    //initialise application
    

    App.init();
    App.startSpeech();
});