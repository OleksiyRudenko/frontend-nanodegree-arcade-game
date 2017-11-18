// Character is a superclass for Enemy and Player
var Character = function(sprite) {
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = sprite;
    // current character location
    this.location = {x: 0, y: 0, col: 0, row: 0};
    // target character location
    this.target = {x: 0, y: 0, col: 0, row: 0};
    // speed character moves from current location to target
    this.speed = {dx: gameSetting.character.enemy.speed.from, dy: 0};
    // viewBox
    this.viewBox = {
        xOffset : 50,
        yOffset : 100,
        width   : 35,
        height  : 40,
    };
};

// Draw the character on the screen, default behaviour; required method for game
Character.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.location.x, this.location.y + gameSetting.scene.characterRowDelta);
    if (gameSetting.debug) ctx.fillText(
        '(' + Math.floor(this.location.x) + ';' + this.location.y + ') => (' +
        '(' + this.target.x + ';' + this.target.y + ') == ' + this.isAtTarget(),
        this.location.x - 50, this.location.y);
};

// Update the character's position, default behaviour; required method for game
// Parameter: dt, a time delta between ticks
Character.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    if (this.isAtTargetColRow()) this.onAtTargetColRow();
    if (this.isAtTargetCol()) this.onAtTargetCol();
    if (this.isAtTargetRow()) this.onAtTargetRow();
    if (this.isAtTarget()) {
        this.onAtTarget();
        return;
    }

    // update location
    this.setLocation(this.location.x + this.speed.dx * dt, this.location.y + this.speed.dy * dt);
    this.onUpdate();
};

// Check if character is at target coordinates (or just passed those)
Character.prototype.isAtTarget = function() {
    var xTarget = this.speed.dx == 0 || (this.speed.dx < 0 && this.location.x <= this.target.x)
        || (this.speed.dx > 0 && this.location.x >= this.target.x);
    var yTarget = this.speed.dy == 0 || (this.speed.dy < 0 && this.location.y <= this.target.y)
        || (this.speed.dy > 0 && this.location.y >= this.target.y);
    return xTarget && yTarget;
};

// Check if character is at target column
Character.prototype.isAtTargetCol = function() {
    return this.location.col == this.target.col;
};

// Check if character is at target row
Character.prototype.isAtTargetRow = function() {
    return this.location.row == this.target.row;
};

// Check if character is at target column and row
Character.prototype.isAtTargetColRow = function() {
    return this.location.isAtTargetCol() && this.isAtTargetRow();
};

// this method is invoked upon character arrival at target
Character.prototype.onAtTarget = function() {
};

// this method is invoked upon character arrival at target column
Character.prototype.onAtTargetCol = function() {
};

// this method is invoked upon character arrival at target column
Character.prototype.onAtTargetRow = function() {
};

// this method is invoked upon character arrival at target column
Character.prototype.onAtTargetColRow = function() {
};

// this method is invoked upon every update
// should be overridden by deriving classes
Character.prototype.onUpdate = function() {
};

// Set character's location x,y
Character.prototype.setLocation = function(x, y) {
    this.location.x = x;
    this.location.y = y;
    this.location.col = x2col(x);
    this.location.row = y2row(y);
};

// Set character's location row
Character.prototype.setLocationRow = function(row) {
    this.setLocation(this.location.x, row2y(row));
};

// Set character's location row
Character.prototype.setLocationCol = function(col) {
    this.setLocation(col2x(col), this.location.y);
};

// Set character's location col & row
Character.prototype.setLocationColRow = function(col, row) {
    this.setLocation(col2x(col), row2y(row));
};

// Set character's target location
Character.prototype.setTarget = function(x, y) {
    x = Math.floor(x);
    y = Math.floor(y);
    this.target.x = x;
    this.target.y = y;
    this.target.col = x2col(x);
    this.target.row = y2row(y);
};

// Set character's target row
Character.prototype.setTargetRow = function(row) {
    this.setTarget(this.target.x, row2y(row));
};

// Set character's target col
Character.prototype.setTargetCol = function(col) {
    this.setTarget(col2x(col), this.target.y);
};

// Set character's target row
Character.prototype.setTargetColRow = function(col, row) {
    this.setTarget(col2x(col), row2y(row));
};

// Set character's target location
Character.prototype.setSpeed = function(dx, dy) {
    this.speed.dx = dx;
    this.speed.dy = dy;
};