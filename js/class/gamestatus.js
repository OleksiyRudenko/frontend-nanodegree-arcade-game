// Game Status class
// PLayer instance, initial number of lives
var GameStatus = function(player, lives) {
    this.player = player;
    this.lives = lives;
};

// Renders status bar and event messages
Character.prototype.render = function() {

};

// Called when Player reaches river
Character.prototype.win = function() {

};

// Called on collisions
Character.prototype.lose = function() {
    this.player.relaunch();
};


