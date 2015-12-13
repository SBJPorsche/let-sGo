var fenceJs = qc.defineBehaviour('qc.engine.fenceJs', qc.Behaviour, function() {
}, {
});

fenceJs.prototype.awake = function() {    
};

fenceJs.prototype.update = function() {
};

fenceJs.prototype.onCollide = function(o1,o2) {
    var self = this;
    G.bgRun = false;
};

fenceJs.prototype.onClick = function() {
    var self = this;
    self.gameObject.y = -1000;
    G.bgRun = true;
};
