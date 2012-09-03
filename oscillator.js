///
// This script moves the entity backwards and forwards on the x-axis.
// You can pause the oscillation by pressing the space bar.
///
pc.script.create('oscillator', function (context) {
	
	// Define the constructor
	var Oscillator = function(entity) {
		this.entity = entity;
		
		this.paused = false;	// Paused state
		this.amplitude = 10;	// The amount to oscillate
		this.time = 0;			// The time value for the oscillation
	};
	
	// Define the update function
	Oscillator.prototype.update = function (dt) {
	
		// Use the jeyboard handler from the ApplicationContext
		// to pause/unpause.
		if(context.keyboard.wasPressed(pc.input.KEY_SPACE)) {
			this.paused = !this.paused;		// Toggle pause state
		}
		
		if(!this.paused)
		{
			// Increment the time value by the frametime
			this.time += dt;
			
			// Calculate the new value
			var x = this.amplitude * Math.sin(this.time);
			
			// Update the x position of the Entity
			this.entity.setLocalPosition(x, 0, 0);
		}
	};
	
	// Return the class definition.
	return Oscillator;
});