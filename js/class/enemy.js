// Enemies our player must avoid
var Enemy = function() {
    Character.call(this,'images/enemy-bug.png');
    this.viewBox = {
        xOffset : 50,
        yOffset : 115,
        width   : 101,
        height  : 70,
    };
};

Enemy.prototype = Object.create(Character.prototype); // inherit methods from superclass
Enemy.prototype.constructor = Enemy; // restore self-reference
// add more specific methods

// ============= Override methods =======================
// This method is called when Character.isAtTarget()
Enemy.prototype.onAtTarget = function () {
    this.relaunch(0);
};

Enemy.prototype.onUpdate = function() {
  this.checkCollisionWithPlayer();
};


// ============= Custom methods ========================
// Relaunches enemy with randomized settings
Enemy.prototype.relaunch = function (row) {
    row = (row < gameSetting.scene.bugRows.from || row > gameSetting.scene.bugRows.to) ? 0 : row;
    this.setLocationColRow(-1, row || randomInt(gameSetting.scene.bugRows));
    this.setTargetColRow(5, this.location.row);
    this.setSpeed(randomInt(gameSetting.character.enemy.speed), 0);
};

// Check for collisions with player
Enemy.prototype.checkCollisionWithPlayer = function() {


};
