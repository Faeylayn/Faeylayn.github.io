if (typeof Asteroids === "undefined") {
  window.Asteroids = {};
}

var movingObject = function(xpos, ypos, vel, radius, color, game) {
  this.xpos = xpos;
  this.ypos = ypos;
  this.vel = vel;
  this.radius = radius;
  this.color = color;
  this.game = game
};

movingObject.prototype.draw = function (ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.xpos,
    this.ypos,
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();
};

movingObject.prototype.move = function() {

  this.xpos += this.vel[0];
  this.ypos += this.vel[1];
  if (this instanceof Bullet){
    var pos = [this.xpos, this.ypos]
  } else {
    var pos = this.game.wrap(this.xpos, this.ypos);
  }
  this.xpos = pos[0];
  this.ypos = pos[1];
};

movingObject.prototype.IsCollidedWith = function (otherObj) {
  var distance = Math.sqrt((this.xpos - otherObj.xpos)*(this.xpos - otherObj.xpos) + (this.ypos - otherObj.ypos)*(this.ypos - otherObj.ypos))
  if (distance < this.radius + otherObj.radius){
    return true
  }
  return false
}
