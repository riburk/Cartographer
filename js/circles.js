/**
 * Created by richardburkhardt on 2/24/15.
 */

define(['jquery', 'circle', 'pvector'], function($, Circle, PVector){
    return function() {
        var canvas, ctx, circles = [];
        var $acceleration, $force;
        var $container = $("#drawing");


        this.init = function () {
            canvas = $container.get(0);
            ctx = canvas.getContext("2d");
            $acceleration = $('#accel');
            $force = $('#force');

            for (var i = 0; i < 20; i++) {
                circles.push(new Circle($container, new PVector(Math.random() * canvas.width, Math.random() * canvas.height), Math.random() * 80 + 10));
            }
        };


        this.draw = function () {
            ctx.fillStyle = 'LavenderBlush';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (var i = 0; i < circles.length; i++) {

                for (var j = 0; j < circles.length; j++) {
                    if (i != j) {
                        var force = circles[j].attract(circles[i]);
                        circles[i].applyForce(force);
                        if (i == 0) {
                            $force.text(force.mag());
                            $acceleration.text(circles[0].acceleration.mag());
                        }
                    }
                }
                circles[i].update();
                circles[i].display();
            }

        };

        this.onMouseMove = function (currentMousePos) {
            for (var i = 0; i < circles.length; i++) {
                circles[i].grow = circles[i].hitTest(currentMousePos);
            }
        }
    }
});



