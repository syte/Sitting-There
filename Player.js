var Player = GameObject.extend({
	init: function() {
		this._super();
		this.texture = Sprite.load("images/Player.jpeg");
		this.type = GameObjectTypes.player;
		this.y = canvas.height - 165;
	},
	
	setup: function() {
	},
	
	update: function(gameObjects, keysPressed) {
		if(keysPressed[Keyboard.leftArrow]) {
			this.x -= 5;
		}
		if(keysPressed[Keyboard.rightArrow]) {
			this.x += 5;
		}
	}
});