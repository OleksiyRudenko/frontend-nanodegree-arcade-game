// Player is our controllable hero
var Player = function() {
    Character.call(this,'images/char-boy.png');
};

Player.prototype = Object.create(Character.prototype); // inherit methods from superclass
Player.prototype.constructor = Player; // restore self-reference

// add more specific methods
Player.prototype.handleInput = function(direction) {
    // if (!this.isAtTarget()) return;
    var dcol = 0;
    var drow = 0;
    switch (direction) {
        case 'left': dcol = -1; break;
        case 'right': dcol = 1; break;
        case 'up': drow = -1; break;
        case 'down': drow = 1; break;
    }
    if (!(this.location.col + dcol < 0 || this.location.col + dcol >= gameSetting.scene.numCols))
        this.setLocationCol(this.location.col + dcol);
    if (!(this.location.row + drow < 0 || this.location.row + drow >= gameSetting.scene.numRows))
        this.setLocationRow(this.location.row + drow);
};