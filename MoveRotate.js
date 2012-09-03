///
// This script moves the entity backwards and forwards on the x-axis. 
// You can pause the oscillation by pressing the space bar.
///
pc.script.create('move_rotate', function (context) {
    // define the constructor
    var Move_Rotate = function (entity) {
        this.entity = entity;
        
                                this.create = false;
                                this.stop = false;
        this.paused = false; // paused state
        this.amplitude = 30; // The amount to oscillate
        this.time = 0; // The time value for the oscillation
                                this.scale = 1;
                                //this.rotation = 5; // degree increment of rotation
    };
    
    // define the update function
    Move_Rotate.prototype.update = function (dt) {
        
        // Use the keyboard handler from the ApplicationContext 
        // to pause/unpause
        if (context.keyboard.wasPressed(pc.input.KEY_SPACE)) {
                                                var opts;
                                                opts.material = null;
                                                opts.radius = 2;
                                                opts.height = 2;
                                                opts.heightSegments = 5;
                                                opts.capSegments = 18;
                                                
                                    pc.scene.procedural.createCylinder(opts);
            this.paused = !this.paused; // toggle paused state
        }
        
        if (!this.paused) {
            // increment the time value by the frametime
            this.time += dt;
                                                
            // Calculate the new value
            var x = this.amplitude * Math.sin(this.time);
                                                var y = this.scale * Math.sin(this.time);
                                                var scale = this.entity.getLocalTransform();
                                                var newscale = pc.math.mat4.makeScale(((x/10)+1),((x/10)+1),((x/10)+1), scale);
                                                pc.math.mat4.multiply(scale, newscale, scale);                                  

            // Update the x position of the Entity
            this.entity.setLocalPosition(0, x, 0);
                                                //this.entity.setLocalScale(y,y,y);
        }

                                if (context.keyboard.wasPressed(pc.input.KEY_LEFT)){
                                                this.stop = !this.stop;
                                                }
                                                
                                if (!this.stop){
                                
                                                var transform = this.entity.getLocalTransform();
                                                var angle = Math.PI/180.0;
                                                var axis = pc.math.vec3.create(0,1,1);
                                                var rotate = pc.math.mat4.makeRotate(angle,axis);
                                                
                                                pc.math.mat4.multiply(transform, rotate, transform);
                                }
    };
    
    // return the class definition
    return Move_Rotate;
});
