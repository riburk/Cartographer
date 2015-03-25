/**
 * Created by richardburkhardt on 3/23/15.
 */

/*****************************
 Make circles attach to a parent circle by a tether

 1. Include a transition
 */

// 1. Create a parent circle (planet)
// 2. Attach child circles to it (moons)
// 3. Moon will subclass circle
// 4. May need a planet subclass of circle too
// 5. Moons are a defined distance from planet
// 6. Moons repel each other
// 7. Draw a line for the tether (or not)

define(['jquery', 'circle', 'pvector'], function($, Circle, PVector){
    return function() {
        var canvas, ctx, planet;
        var $container = $("#drawing");



        this.init = function () {
            canvas = $container.get(0);
            ctx = canvas.getContext("2d");

            planet = new Circle($container, new PVector(Math.random() * canvas.width, Math.random() * canvas.height), Math.random() * 80 + 10);
        };


        this.draw = function () {
            ctx.fillStyle = 'LavenderBlush';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            planet.update();
            planet.display();
        };

        this.onMouseMove = function (currentMousePos) {
                planet.grow = planet.hitTest(currentMousePos);
            }
    }
});



