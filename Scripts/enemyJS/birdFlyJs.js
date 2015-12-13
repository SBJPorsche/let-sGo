var birdFlyJs = qc.defineBehaviour('qc.engine.birdFlyJs', qc.Behaviour, function() {
}, {
});

birdFlyJs.prototype.awake = function() {   
};

birdFlyJs.prototype.update = function() {
};

birdFlyJs.prototype.onCollide = function(o1,o2) {
    var self = this;
    G.bgRun = false;
//     G.playerDead = true;
};

birdFlyJs.prototype.onClick = function() {
    var self = this;
    self.gameObject.y = -1000;
    G.bgRun = true;
};

