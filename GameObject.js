var GameObject = Class.extend({
	init: function(type) {
		this.texture = null;
		this.type = type;
		this.x = 0;
		this.y = 0;
		this.w = 0;
		this.h = 0;
		this.dx = 0;
		this.dy = 0;
	},
	
	setup: function() {	
	},
	
	update: function(gameObjects) {
	},
	
	draw: function(canvas) {
		var ctx = canvas.getContext("2d");
		if(this.texture) {
			ctx.drawImage(this.texture, this.x, this.y);
		}		
	},
	
	rect: function() {
		return new Rectangle(this.x, this.y, this.w, this.h);
	},
	
	hasCollided: function(gameObjects, type) {
		var rect = this.rect();
		var length = gameObjects.length;
		var matches = [];
		
		if(gameObjects instanceof Array) {
			for(var i = 0; i < length; i++) {
				var curr = gameObjects[i];
				if(curr.rect().intersects(rect) &&
				   curr.type == type) {
						
					matches.push(curr);
				}
			}
		}
	
		if(gameObjects instanceof GameObject) {
			if(gameObjects.rect().intersects(rect) &&
			   gameObjects.type == type) {
					
				matches.push(curr);
			}
		}
		
		return matches;
	},
});
