if (typeof Asteroids === "undefined") {
  window.Asteroids = {};
}

var Ship = Asteroids.Ship = function(game) {
  this.game = game;
  this.position = Asteroids.Util.randomPosition(this.game.DIM_X, this.game.DIM_Y);
  this.xpos = this.position[0];
  this.ypos = this.position[1];
  this.color = Asteroids.Game.SHIPCOLOR;
  this.radius = Asteroids.Game.SHIPRADIUS;
  this.vel = [0,0];
  this.direction = [Math.cos(0), Math.sin(0)];
  this.angle = 0;
  this.speed = 0;
  this.fired = false;
  this.invuln = false;
  this.relocate()
};

Asteroids.Util.inherits(movingObject, Ship);

Ship.prototype.relocate = function () {
  this.position = Asteroids.Util.randomPosition(this.game.DIM_X, this.game.DIM_Y);
  this.xpos = this.position[0];
  this.ypos = this.position[1];
  this.vel = [0,0];
  this.invuln = true;
  this.color = '#f6f7a7'
  setTimeout(function() {
    this.invuln = false;
    this.color = Asteroids.Game.SHIPCOLOR
  }.bind(this), 3000)
};


Ship.prototype.power = function (impulse) {
  if (impulse === 'up'){
    if (Math.pow((this.vel[0] + this.direction[0]), 2) + Math.pow((this.vel[1]), 2) < 16) {
      this.vel[0] += this.direction[0] * .2;
    }
    if (Math.pow((this.vel[1] + this.direction[1]), 2) + Math.pow((this.vel[0]), 2) < 16) {
      this.vel[1] += this.direction[1] * .2;
    }
  }
  if (impulse === 'down'){
    if (Math.pow((this.vel[0] - this.direction[0]), 2) + Math.pow((this.vel[1]), 2) < 16) {
      this.vel[0] -= this.direction[0] * .2;
    }
    if (Math.pow((this.vel[1] - this.direction[1]), 2) + Math.pow((this.vel[0]), 2) < 16) {
      this.vel[1] -= this.direction[1] * .2;
    }
  }

  if (impulse === 'left'){

    this.angle -= .1
    this.calcDirection()
  }
  if (impulse === 'right'){
    this.angle += .1
    this.calcDirection()
  }

}

Ship.prototype.calcDirection = function () {
  this.direction[0] = Math.cos(this.angle)
  this.direction[1] = Math.sin(this.angle)

}


Ship.prototype.fire = function () {
  if (this.fired === false && this.invuln === false) {
    this.fired = true
    setTimeout(function () {this.fired = false}.bind(this), 250)
    var new_bullet = new Bullet(this.angle, [this.xpos, this.ypos], this.game)
    this.game.bullets.push(new_bullet)
    setTimeout(function() {
      var idx = this.game.bullets.indexOf(new_bullet)
      if (idx > 0) {
        this.game.removeBullet(idx)
      }
    }.bind(this), 1500)
  }
}

Ship.prototype.drawNose = function (ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.xpos+(25 * Math.cos(this.angle)),
    this.ypos+(25 * Math.sin(this.angle)),
    5,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();
};
