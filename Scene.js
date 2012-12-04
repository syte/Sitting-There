var Scene = GameObject.extend({
	init: function() {
		this._super();
		this.texture = Sprite.load("images/Scene.png");
		this.type = GameObjectTypes.scene;
		
	},
	
	update: function(gameObjects, keysPressed) {
		if(keysPressed[Keyboard.leftArrow]) {
			this.x -= 1;
		}
		else if(keysPressed[Keyboard.rightArrow]) {
			this.x += 1;
		}
	},
	
	draw: function(canvas) {
		ctx = canvas.getContext("2d");
		if(this.texture) {
		   if(this.x >= canvas.width){
				this.x = 0;
			}
			else if(this.x < 0) {
				this.x = canvas.width;
			}
			
			ctx.drawImage(this.texture,
				0, 0, canvas.width - this.x, this.texture.height,
				this.x, 0, canvas.width - this.x, this.texture.height);
								
			ctx.drawImage(this.texture,
				canvas.width - this.x, 0, this.x, this.texture.height,
				0, 0, this.x, this.texture.height);
		}
				
	}
});