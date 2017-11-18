// Game Status class
// PLayer instance, initial number of lives
var GameStatus = function(player, lives) {
    this.player = player;
    this.lives = lives;
    this.allowPlayer = true; // do we read keyboard?
};

// Renders status bar and event messages
GameStatus.prototype.render = function() {
    // draw box
    ctx.beginPath();
    ctx.rect(0,0,gameSetting.scene.dimension.width,50);
    ctx.fillStyle='#FFFF66';
    ctx.fill();

    // print text
    // 'Lives:'
    ctx.fillStyle='#000066';
    ctx.font = '24px arial';
    ctx.fillText("Lives:", 100, 40);
    ctx.font = 'bold 24px arial';
    ctx.textAlign = 'right';
    ctx.fillText(this.lives, 150, 40, 50);
};

// Called when Player reaches river
GameStatus.prototype.win = function() {
    this.lives++;
};

// Called on collisions
GameStatus.prototype.lose = function() {
    if (--this.lives == 0) this.allowPlayer = false;
    this.player.relaunch();
};


