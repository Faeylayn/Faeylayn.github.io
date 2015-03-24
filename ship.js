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
  this.direction = [Math.cos(0), Math.sin(0)]
  this.angle = 0

};

Asteroids.Util.inherits(movingObject, Ship);

Ship.prototype.relocate = function () {
  this.position = Asteroids.Util.randomPosition(this.game.DIM_X, this.game.DIM_Y);
  this.xpos = this.position[0];
  this.ypos = this.position[1];
  this.vel = [0,0];
};

// Ship.prototype.power = function (impulse) {
//   if (impulse === 'up'){
//     if (this.vel[1] > -3) {
//     this.vel[1] -= 1 }
//   }
//   if (impulse === 'down'){
//     if (this.vel[1] < 3) {
//     this.vel[1] += 1 }
//   }
//   if (impulse === 'left'){
//     if (this.vel[0] > -3) {
//     this.vel[0] -= 1 }
//   }
//   if (impulse === 'right'){
//     if (this.vel[0] < 3) {
//     this.vel[0] += 1 }
//   }
//
// }
Ship.prototype.power = function (impulse) {
  if (impulse === 'up'){
    if (this.direction[0] >= 0){
      if (this.vel[0] < 3) {
        this.vel[0] += this.direction[0];
      }
    } else {
      if (this.vel[0] > -3){
        this.vel[0] += this.direction[0];

      }
    }


  if (this.direction[1] >= 0){
    if (this.vel[1] < 3) {
      this.vel[1] += this.direction[1];
    }
    } else {
      if (this.vel[1] > -3){
        this.vel[1] += this.direction[1];

      }
    }
  }


  if (impulse === 'down'){
    if (this.direction[0] >= 0){
      if (this.vel[0] > -3) {
        this.vel[0] -= this.direction[0];
      }
    } else {
      if (this.vel[0] < 3){
        this.vel[0] -= this.direction[0];

      }
    }


  if (this.direction[1] >= 0){
    if (this.vel[1] > -3) {
      this.vel[1] -= this.direction[1];
    }
    } else {
      if (this.vel[1] < 3){
        this.vel[1] -= this.direction[1];

      }
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
  var new_bullet = new Bullet(this.angle, [this.xpos, this.ypos], this.game)
  this.game.bullets.push(new_bullet)
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
