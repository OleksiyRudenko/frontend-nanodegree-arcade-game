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