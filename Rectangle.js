var Rectangle = Class.extend({
	init: function(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	},
	intersects : function(r2) {
		return (this.y+this.h > r2.y) && 
			    (this.y < r2.y+r2.h) &&
   		    (this.x+this.w >r2.x) &&
				 (this.x < r2.x+r2.w);
	}	
});