// Player is our controllable hero
var Player = function() {
    Character.call(this,'images/char-boy.png');
};

Player.prototype = Object.create(Character.prototype); // inherit methods from superclass
Player.prototype.constructor = Player; // restore self-reference
// override default methods
Player.prototype.update = function(dt) {

};
// add more specific methods
Player.prototype.handleInput = function(direction) {

};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
for (var i = 0; i < 3; i++) {
    allEnemies.push(new Enemy());
    allEnemies[i].setLocationRow(randomInt(gameSetting.scene.bugRows));
    allEnemies[i].speed = randomInt(gameSetting.character.enemy.speed);
}

var player = new Player();
player.setLocationRow(gameSetting.scene.playerStartRow);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
