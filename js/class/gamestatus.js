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

    // game over
    if (!this.lives) {
        // panel
        var w = Math.floor(gameSetting.scene.dimension.width * 0.8),
            h = Math.floor(gameSetting.scene.dimension.height * 0.5),
            x = Math.floor((gameSetting.scene.dimension.width - w) / 2),
            y = Math.floor((gameSetting.scene.dimension.height - h) * 0.3);
        ctx.beginPath();
        ctx.fillStyle = '#cc0000';
        ctx.rect(x,y,w,h);
        ctx.globalAlpha = 0.85;
        ctx.fill();
        ctx.globalAlpha = 1;
        // Game Over
        ctx.fillStyle = '#aaaaaa';
        ctx.font = 'bold 36px arial';
        ctx.textAlign = 'center';
        ctx.fillText("Game Over", x + w / 2, y + 90, w);
        ctx.font = '24px arial';
        ctx.textAlign = 'center';
        ctx.fillText("Reload page to restart", x + w/2, y + 150, w);
    }
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


