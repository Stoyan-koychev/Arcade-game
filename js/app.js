
// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = 150 + Math.floor(Math.random() * 150);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + (dt * this.speed);

    //check if the bug is off the canvas and move it to the start
    if (this.x > 600){
    this.x = 0 - Math.random() * 177;
    }
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
let Player = function(x, y) {
  this.sprite = 'images/char-boy.png';
  this.x = x;
  this.y = y;
};


Player.prototype.update = function() {
  if (this.y === -11) {
    this.reset();
    alert('you won!');
  }
};

//Reset the position of the player
Player.prototype.reset = function() {
  this.x = 202;
  this.y = 404;
};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
  if (key == 'up' && this.y > 0) {
    this.y -= 83;
  } else if (key == 'down' && this.y < 404) {
    this.y += 83;
  } else if (key == 'left' && this.x > 0) {
    this.x -= 101;
  } else if (key == 'right' && this.x < 404) {
    this.x += 101;
  }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let player = new Player(202, 404);
let allEnemies = [];
player.update();

// Add the new enemy to the allEnemies array
for (var i = 1; i < 4; i++) {
  var enemy = new Enemy(-101, (i * 83) - 21);
  allEnemies.push(enemy);
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
