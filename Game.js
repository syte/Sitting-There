
var Game = Class.extend({
	init: function(canvas) {
		this.canvas = canvas;
		this.currLevel = new Level();
		this.keysPressed = {};
		this.setup();
		this.context = this.canvas.getContext("2d");
	},
	loop: function() {
		this.context.clearRect(0, 0, canvas.width, canvas.height);
		this.currLevel.play(this.keysPressed);
		var _this = this;
		setTimeout(function() { _this.loop(); }, 1);
	},
	setup: function() {
		var _this = this;
		$(window).keydown(function() {
				_this.keysPressed[event.keyCode] = true;
		});
		
		$(window).keyup(function() {
				_this.keysPressed[event.keyCode] = false;
		});
	}
});