/**
 * Created by richardburkhardt on 3/19/15.
 */

var currentMousePos;

requirejs.config({
    baseUrl: 'js',
    paths: {jquery: 'vendor/jquery-1.10.2.min'}
});


requirejs(["jquery", "circles", "pvector"], function($, Circles, PVector) {

    var currentTest;
    var currentMousePos;
    currentMousePos = new PVector(0,0);

    window.requestAnimFrame = (function () {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    function animate() {
        requestAnimFrame(animate);
        step();
    }

    function step() {
        currentTest.draw();
    }

    function init(){
        currentTest = new Circles();
        currentTest.init();
        var canvas = document.getElementById("drawing");

        canvas.addEventListener('mousemove', function(evt) {
            onMouseMove(canvas,evt);
        }, false);

        animate();
    }


    function onMouseMove(canvas, event) {
        currentMousePos.x = event.pageX - event.currentTarget.offsetLeft;
        currentMousePos.y = event.pageY - event.currentTarget.offsetTop;

        if ( currentTest && currentTest.onMouseMove )
            currentTest.onMouseMove(currentMousePos);
    }

    init();

    //$('#drawing').mousemove(function (event) {
    //    currentMousePos.x = event.pageX - event.currentTarget.offsetLeft;
    //    currentMousePos.y = event.pageY - event.currentTarget.offsetTop;
    //
    //    for (var i = 0; i < circles.length; i++) {
    //        circles[i].grow = circles[i].hitTest(currentMousePos);
    //    }
    //});


    //var currentMousePos = new PVector(0, 0);
});