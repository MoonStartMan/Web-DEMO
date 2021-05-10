var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          Johan Karlsson, 2019
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          https://twitter.com/DonKarlssonSan
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          MIT License, see Details View
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        */var

Particle = function () {
  function Particle(angle) {_classCallCheck(this, Particle);
    this.x = 0;
    this.y = 0;
    this.angle = angle;
    this.offset = Math.random() * Math.PI;
  }_createClass(Particle, [{ key: "move", value: function move()

    {
      var noiseFactor = 0.3 * size;
      var n = Math.sin(this.angle + ticker + this.offset) * noiseFactor;
      var r = size + n;
      this.x = r * 16 * Math.pow(Math.sin(this.angle), 3);
      this.y = -r * (13 * Math.cos(this.angle) - 5 * Math.cos(2 * this.angle) - 2 * Math.cos(3 * this.angle) - Math.cos(4 * this.angle));

      this.angle += 0.004;
    } }, { key: "draw", value: function draw(

    x0, y0) {
      ctx.fillRect(x0 + this.x, y0 + this.y, 1, 1);
    } }]);return Particle;}();


var canvas = void 0;
var ctx = void 0;
var ticker = void 0;
var particles = void 0;
var size = void 0;

function setup() {
  ticker = 0;
  canvas = document.querySelector("#canvas");
  ctx = canvas.getContext("2d");
  reset();
  window.addEventListener("resize", reset);
}

function setupParticles() {
  particles = [];
  var nrOfParticles = size * size * 200;
  for (var angle = 0; angle < Math.PI * 2; angle += Math.PI * 2 / nrOfParticles) {
    var p = new Particle(angle);
    particles.push(p);
  }
}

function reset() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  size = Math.min(w, h) * 0.022;
  setupParticles();
}

function draw() {
  requestAnimationFrame(draw);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "red";
  particles.forEach(function (p) {
    p.move();
    p.draw(w / 2, h * 0.45);
  });
  ticker += 0.02;
}

setup();
draw();