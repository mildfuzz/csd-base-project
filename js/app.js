/*
 * Author: john.farrow@aerian.com
 */
define(['libs/underscore','libs/jquery', 'libs/backbone','libs/speech','VideoPlayer'],function(_,$,Backbone,Speech, VideoPlayer){
    var App = function(){
        this.init();
    }, a = App.prototype;
    a.init = function(){
        var video = new VideoPlayer({
            id: 'my_video'
        });
        
        
        /**
         * EVENT HANDLERS
         */
        
        
    };
    a.attachVideo = function(){
        this.video = new VideoPlayer({
            id: 'my_video'
        });

        
    };

    
    a.startSpeech = function(){
            var text = $('.text');

            var speech = new Speech({
                debugging: true,
                continuous: true,
                interimResults: true,
                autoRestart: true
            });

            speech
                .on('start', function () {
                    $(text).html('Come on, talk to me.');
                })
                .on('end', function () {
                    $(text).html('Stopped listening.');
                })
                
                .on('finalResult', function (msg) {
                    this.testForAction();
                    $(text).html(msg);
                })
                .start();

    };


    return App;
});