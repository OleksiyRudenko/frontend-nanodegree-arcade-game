// Character is a superclass for Enemy and Player
var Character = function(sprite) {
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = sprite;
    // current character location
    this.location = {x: 0, y: 0, row: 1};
    // target character location
    this.target = {x: 100, y: 0, row: 0};
    // speed character moves from current location to target
    this.speed = gameSetting.character.enemy.speed.from;
};

// Draw the character on the screen, default behaviour; required method for game
Character.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.location.x, this.location.y + gameSetting.scene.characterRowDelta);
};

// Update the character's position, default behaviour; required method for game
// Parameter: dt, a time delta between ticks
Character.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.location.x += this.speed * dt;
};

// Set character's location x,y
Character.prototype.setLocation = function(x,y) {
    this.location = {
        x: x,
        y: y,
        row: Math.floor(y / gameSetting.scene.block.height),
    };
};

// Set character's location row
Character.prototype.setLocationRow = function(row) {
    this.location.row = row;
    this.location.y = row * gameSetting.scene.block.height;
};

// Set character's target location
Character.prototype.setTarget = function(x,y) {
    this.target = {x: x, y: y};
};

// Set character's target location
Character.prototype.setSpeed = function(speed) {
    this.speed = speed;
};
