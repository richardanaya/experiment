$(document).ready(function(){
    // create an new instance of a pixi stage
    var stage = new PIXI.Stage(0x66FF99);

    var width = 400;
    var height = 300;
    // create a renderer instance.
    var renderer = PIXI.autoDetectRenderer(width, height);

    // add the renderer view element to the DOM
    $('#screenArea').append(renderer.view);

    requestAnimFrame( animate );

    var bunnies = [];
    $('#text-basic').keydown(function(e){
        if(e.keyCode == 13){
            // create a texture from an image path
            var texture = PIXI.Texture.fromImage("bunny.png");
            // create a new Sprite using the texture
            var bunny = new PIXI.Sprite(texture);

            // center the sprites anchor point
            bunny.anchor.x = 0.5;
            bunny.anchor.y = 0.5;

            // move the sprite t the center of the screen
            bunny.position.x = width*Math.random();
            bunny.position.y = height*Math.random();

            stage.addChild(bunny);
            bunnies.push(bunny);
        }
    });



    function animate() {

        requestAnimFrame( animate );

        for(var i in bunnies){
            bunnies[i].rotation += 0.1;
        }
        // just for fun, lets rotate mr rabbit a little


        // render the stage
        renderer.render(stage);
    }
});