if (typeof Asteroids === "undefined") {
  window.Asteroids = {};
}

var Bullet = function (shipAngle, shipPos, game) {
  this.game = game
  this.velx = Math.cos(shipAngle) * 7
  this.vely = Math.sin(shipAngle) * 7
  this.vel = [this.velx, this.vely]
  this.xpos = shipPos[0] + (25 * Math.cos(shipAngle))
  this.ypos = shipPos[1] + (25 * Math.sin(shipAngle))
  this.radius = 5
  this.color = "#00FF00"
}

Asteroids.Util.inherits(movingObject, Bullet);
