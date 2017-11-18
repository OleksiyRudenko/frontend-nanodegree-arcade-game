// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
for (var i = 0; i < 5; i++) {
    allEnemies.push(new Enemy());
    allEnemies[i].relaunch(i);
}

var player = new Player();
player.setLocationColRow(Math.floor(gameSetting.scene.numCols / 2), gameSetting.scene.playerStartRow);
var playerSpeed = 0; // Math.floor(gameSetting.character.enemy.speed.to * 1.5);
player.setSpeed(playerSpeed, playerSpeed);

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
