if (typeof Asteroids === "undefined") {
  window.Asteroids = {};
}

Asteroids.Util = {negswitch: true}

Asteroids.Util.inherits = function (baseClass, subClass) {
  function Surrogate() {};
  Surrogate.prototype = baseClass.prototype;
  subClass.prototype = new Surrogate();
};

Asteroids.Util.randomVec = function(length) {
  var xpos = (Math.random() * length) - (Math.random() * length);

  var neg = (Math.round(Math.random() * 2 - 1));
    if (neg === 0) {
      if (this.negswitch) {
        neg = 1
      } else {
        neg = -1
      }
      this.negswitch = (this.negswitch === true) ? false : true
    }
  var ypos = Math.sqrt((length * length) - (xpos * xpos)) * neg
  return [xpos, ypos]
}

Asteroids.Util.randomPosition = function(xdim, ydim) {
  var xpos = Math.random() * xdim;
  var ypos = Math.random() * ydim;

  return [xpos, ypos];
};
