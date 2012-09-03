pc.script.create("spinner", function (context) {
 
    var Spinner = function (entity) {
        // Cache the entity that this script instance affects
        this.entity = entity;
    };
 
    Spinner.prototype.update = function (dt) {
        // Retrieve the transformation matrix of the entity
        var transform = this.entity.getLocalTransform();
 
        // Create rotation matrix of 1 degree around the y axis
        var angle = Math.PI / 180.0; 
        var axis = pc.math.vec3.create(0, 1, 0);
        var rotate = pc.math.mat4.makeRotate(angle, axis);
 
        // Pre-multiply the rotation against the entity xform
        pc.math.mat4.multiply(transform, rotate, transform);
    };
 
    return Spinner;
});