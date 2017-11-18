// Game Status class
// PLayer instance, initial number of lives
var GameStatus = function(player, lives) {
    this.player = player;
    this.lives = lives;
};

// Renders status bar and event messages
GameStatus.prototype.render = function() {

};

// Called when Player reaches river
GameStatus.prototype.win = function() {

};

// Called on collisions
GameStatus.prototype.lose = function() {
    this.player.relaunch();
};


