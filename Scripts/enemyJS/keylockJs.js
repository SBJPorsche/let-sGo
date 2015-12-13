var keylockJs = qc.defineBehaviour('qc.engine.keylockJs', qc.Behaviour, function() {
    var self = this;
}, {
});

keylockJs.prototype.awake = function() {
    var self = this;
    var locks = ['suo.png','suo1.png'];
    
    self.gameObject.frame = locks[G.game.math.random(0,1)];
};

keylockJs.prototype.update = function() {
};

keylockJs.prototype.onCollide = function(o1,o2) {
    G.bgRun = false;
};

keylockJs.prototype.onClick = function() {
};

