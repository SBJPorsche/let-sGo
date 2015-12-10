var birdFlyJs = qc.defineBehaviour('qc.engine.birdFlyJs', qc.Behaviour, function() {
}, {
});

birdFlyJs.prototype.awake = function() {
};

birdFlyJs.prototype.update = function() {
	var self = this;
    var rigid = self.getScript('qc.arcade.RigidBody');
    if(G.bgRun === true){
         rigid.moves = true;
         self.gameObject.y = self.gameObject.y - G.offset * G.game.time.deltaTime;
    }else{
         rigid.moves = false;
    }
};

birdFlyJs.prototype.onCollide = function(o1,o2) {
    var self = this;
    G.bgRun = false;
//     G.playerDead = true;
};

birdFlyJs.prototype.onClick = function() {
    var self = this;
    self.gameObject.y = -50000;
    G.bgRun = true;
};

