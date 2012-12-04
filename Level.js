var Level = Class.extend({
	init: function() {
		var NUMBER_OF_ENEMIES = 4;
		var enemies = [];
		
		for(var i = 0; i < NUMBER_OF_ENEMIES; i++) {
			enemies.push(new Enemy());
		}
		
		this.gameObjects = {
			scene: [new Scene()],
			player : [new Player()]
		};
	},
	
	getGameObjects: function() {
		return this.gameObjects;
	},
	
	play: function(keysPressed) {
		for(var type in this.gameObjects) {
			if(this.gameObjects.hasOwnProperty(type)) {
				for(var i = 0; i < this.gameObjects[type].length; i++) {
					this.gameObjects[type][i].update(this.gameObjects, keysPressed);
					this.gameObjects[type][i].draw(canvas);
				}
			}
		}
	}
});