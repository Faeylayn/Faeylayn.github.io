(function() {
if (typeof Asteroids === "undefined") {
  window.Asteroids = {};
}
var GameView = Asteroids.GameView = function(asteroidCanvas, game) {
  this.game = game;
  this.ctx = asteroidCanvas.getContext("2d");
  this.thrust = {
    up: false,
    down: false,
    left: false,
    right: false,
  };
  this.fire = false
};

GameView.prototype.start = function() {
  var img = new Image();
  var ctx = this.ctx
  img.src = 'http://wallpaper4me.com/images/wallpapers/asteroid_storm_train_w1.jpeg';
  // img.onload = function () {
  //   ctx.drawImage(img, 0, 0);
  // };

  this.bindKeyHandlers()
  window.interval = setInterval((function () {
    ctx.drawImage(img, 0, 0)
       this.AdjustThrust();
       this.game.step(ctx);
      //  if (this.game.GameOver) {
      //    clearInterval(window.interval)
      //  }
     }).bind(this), 20);
   };

GameView.prototype.bindKeyHandlers = function () {
  $(document).keydown(function(event){
    this.parseKeycodeDown(event.keyCode)
  }.bind(this))

  $(document).keyup(function(event){
    this.parseKeycodeUp(event.keyCode)
  }.bind(this))
}

GameView.prototype.parseKeycodeDown = function(keycode){

  // Move Up
  if(keycode === 38){
    this.thrust.up = true
  }
  // Move Down
  if(keycode === 40){
    this.thrust.down = true
  }
  // Move Left
  if(keycode === 37){
    this.thrust.left = true
  }
  // Move Right
  if(keycode === 39){
    this.thrust.right = true
  }

  if(keycode === 32){
    this.fire = true
  }
}

GameView.prototype.parseKeycodeUp = function(keycode){

  // Move Up
  if(keycode === 38){
    this.thrust.up = false
  }
  // Move Down
  if(keycode === 40){
    this.thrust.down = false
  }
  // Move Left
  if(keycode === 37){
    this.thrust.left = false
  }
  // Move Right
  if(keycode === 39){
    this.thrust.right = false
  }
  if(keycode === 32){
    this.fire = false
  }
}

GameView.prototype.AdjustThrust = function () {

  if(this.thrust.up){
    this.game.ship.power('up')
  }
  // Move Down
  if(this.thrust.down){
    this.game.ship.power('down')
  }
  // Move Left
  if(this.thrust.left){
    this.game.ship.power('left')
  }
  // Move Right
  if(this.thrust.right){
    this.game.ship.power('right')
  }

  if(this.fire){
    this.game.ship.fire()
  }
}
  // $(document).on("keydown", 39, function(){ this.game.ship.power('right') }.bind(this))
  // $(document).on("keydown", 40, function(){ this.game.ship.power('down') }.bind(this))
 // key('up', function(){ this.game.ship.power('up') }.bind(this));
 // key('down', function(){ this.game.ship.power('down') }.bind(this));
 // key('left', function(){ this.game.ship.power('left') }.bind(this));
 // key('right', function(){ this.game.ship.power('right') }.bind(this));
 // key('space', function(){ this.game.ship.fire() }.bind(this));
}) ()
