var Asteroid = function (xpos, ypos, game, size, radius) {
  this.xpos = xpos;
  this.ypos = ypos;
  this.color = Asteroids.Game.DEFAULT_COLOR;
  this.radius = radius;
  this.vel = Asteroids.Util.randomVec(2);
  this.game = game;
  this.size = size
};

Asteroids.Util.inherits(movingObject, Asteroid);
