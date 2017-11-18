// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
for (var i = 0; i < 3; i++) {
    allEnemies.push(new Enemy());
    allEnemies[i].setLocationColRow(0, randomInt(gameSetting.scene.bugRows));
    allEnemies[i].setTargetColRow(4, allEnemies[i].location.row);
    allEnemies[i].setSpeed(randomInt(gameSetting.character.enemy.speed), 0);
}

var player = new Player();
player.setLocationColRow(0, gameSetting.scene.playerStartRow);

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
