/*
 * Author: john.farrow@aerian.com
 */
define(['libs/underscore','libs/jquery', 'libs/backbone','libs/speech'],function(_,$,Backbone,Speech){
    var App = {};
    App.init = function(){
    	
    };
    App.startSpeech = function(){
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
                .start()

    };


    return App;
});