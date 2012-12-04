var Enemy = GameObject.extend({
	init: function() {
		this._super();
		this.texture = Sprite.load("images/Frogger.png");
		this.type = GameObjectTypes.enemy;
	},
	
	update: function() {
		//this.x += 1;
	}
});