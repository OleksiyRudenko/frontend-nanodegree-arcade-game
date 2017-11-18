// Enemies our player must avoid
var Enemy = function() {
    Character.call(this,'images/enemy-bug.png');
};

Enemy.prototype = Object.create(Character.prototype); // inherit methods from superclass
Enemy.prototype.constructor = Enemy; // restore self-reference
// add more specific methods

// This method is called when Character.isAtTarget()
Enemy.prototype.onAtTarget = function () {
    this.relaunch(0);
};

// relaunches enemy with randomized settings
Enemy.prototype.relaunch = function (row) {
    row = (row < gameSetting.scene.bugRows.from || row > gameSetting.scene.bugRows.to) ? 0 : row;
    this.setLocationColRow(-1, row || randomInt(gameSetting.scene.bugRows));
    this.setTargetColRow(5, this.location.row);
    this.setSpeed(randomInt(gameSetting.character.enemy.speed), 0);
};
