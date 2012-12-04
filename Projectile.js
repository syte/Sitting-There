var Projectile = GameObject.extend({
	init: function(owner) {
		this._super(GameObjectTypes.projectile);
		this.owner = owner;
	}
});