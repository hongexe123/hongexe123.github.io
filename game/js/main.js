// JavaScript Document
Molecule({
    width: 320,
    height: 320
})
.sprite('flappy', 'js/1.png')

.ready(function (game) {

    game.input.enable('keyboard');

    // We define a molecule by naming it
    game.molecule.define('Bird', {

        // There are four special properties
        sprite: game.sprite.create('flappy'),

        // Any text you want to be added
        text: {
            hello: game.text.create({
                title: 'Wazap?'
            })
        },

        // You can add any properties you like
        // beyond that
        squeekCount: 0,

        // The init method is triggered when you
        // add the molecule to the game
        init: function () {
            this.sprite.position.x = game.canvas.width / 2;
            this.sprite.position.y = game.canvas.height / 2;
        },

        // Update is run on every frame update of the
        // game
        update: function () {
            this.move();
            if (this.squeekCount > 10) {

                // Removes the molecule from the game,
                // including all sprites and text
                game.remove(this);

            }
        },

        // But you can add your own methods also
        move: function (key) {
            if (game.input.key.LEFT_ARROW) {
                this.sprite.position.x--;
            } else if (game.input.key.RIGHT_ARROW) {
                this.sprite.position.x++;
            }
			if (game.input.key.UP_ARROW) {
                this.sprite.position.y--;
            } else if (game.input.key.DOWN_ARROW) {
                this.sprite.position.y++;
            }
        },


    });

    // Add a Bird to the game. The instance
    // created will be returned
    game.molecule.add('Bird');

});