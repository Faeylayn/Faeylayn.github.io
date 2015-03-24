(function() {
if (typeof Asteroids === "undefined") {
  window.Asteroids = {};
}
var GameView = Asteroids.GameView = function(asteroidCanvas, game) {
  this.game = game
  this.ctx = asteroidCanvas.getContext("2d");
};

GameView.prototype.start = function() {
  var img = new Image();
  var ctx = this.ctx
  img.src = 'http://wallpaper4me.com/images/wallpapers/asteroid_storm_train_w1.jpeg';
  // img.onload = function () {
  //   ctx.drawImage(img, 0, 0);
  // };

  this.bindKeyHandlers()
  window.setInterval((function () {
    ctx.drawImage(img, 0, 0)
       this.step(ctx);
     }).bind(this.game), 20);
   };

GameView.prototype.bindKeyHandlers = function () {
 key('up', function(){ this.game.ship.power('up') }.bind(this));
 key('down', function(){ this.game.ship.power('down') }.bind(this));
 key('left', function(){ this.game.ship.power('left') }.bind(this));
 key('right', function(){ this.game.ship.power('right') }.bind(this));
 key('space', function(){ this.game.ship.fire() }.bind(this));
}
}) ()
