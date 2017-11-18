// Enemies our player must avoid
var Enemy = function() {
    Character.call(this,'images/enemy-bug.png');
};

Enemy.prototype = Object.create(Character.prototype); // inherit methods from superclass
Enemy.prototype.constructor = Enemy; // restore self-reference
// add more specific methods
