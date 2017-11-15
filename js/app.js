// Character is a superclass for Enemy and Player
var Character = function(sprite) {
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = sprite;
};

// Draw the character on the screen, default behaviour; required method for game
Character.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Update the character's position, default behaviour; required method for game
// Parameter: dt, a time delta between ticks
Character.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
};

// Enemies our player must avoid
var Enemy = function() {
    Character.call(this,'images/enemy-bug.png');
};

Enemy.prototype = Object.create(Character.prototype); // inherit methods from superclass
Enemy.prototype.constructor = Enemy; // restore self-reference
// add more specific methods

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



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
