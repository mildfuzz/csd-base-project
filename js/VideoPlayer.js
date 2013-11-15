define(['libs/jquery','libs/underscore'],function($, _){
    var VideoPlayer = function(options){
        this.init(options);
    }, vp = VideoPlayer.prototype;
    
    vp.init = function(options){
        this.video = $('#'+options.id)[0];
        _.bindAll(this, 'play','pause','stop','restart','seek','next','showMe','attachEvents');
        this.attachEvents();
    };
    
    vp.play = function(){
        this.video.play();
    };
    
    vp.pause = function(){
        this.video.pause();
    };
    
    vp.stop = function(){
        this.video.pause();
        this.video.currentTime = 0;
    };
    
    vp.restart = function(){
        this.video.currentTime = 0;
        this.video.play();
    };
    
    vp.seek = function(time){
        this.video.currentTime = time;
    };
    
    vp.next = function(){
        this.video.src = 'videos/steak.mp4';
        this.video.load();
        this.video.play();
    };
    
    vp.showMe = function(content){
        this.video.src = 'videos/'+content+'.mp4';
        this.video.load();
        this.video.play();
    };

    vp.attachEvents = function(){
        //Touch events
        $('#play').on('click', this.play);
        
        $('#pause').on('click', this.pause);
        
        $('#stop').on('click', this.stop);
        
        $('#restart').on('click', this.restart);
        
        $('#seek').on('click', this.seek);
        
        $('#next').on('click', this.next);
        
        $('#show-me').on('click', this.showMe);

        //voice events
    };
    
    return VideoPlayer;
});