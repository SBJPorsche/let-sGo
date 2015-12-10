var dbarrowJs = qc.defineBehaviour('qc.engine.dbarrowJs', qc.Behaviour, function() {
    var self = this;
}, {
});

dbarrowJs.prototype.awake = function() {
    var self = this;
};

dbarrowJs.prototype.update = function() {
	var self = this;
    var rigid = self.getScript('qc.arcade.RigidBody');
    if(G.bgRun === true){
         rigid.moves = true;
         self.gameObject.y = self.gameObject.y - G.offset * G.game.time.deltaTime;
    }else{
         rigid.moves = false;
    }
};

dbarrowJs.prototype.onCollide = function(o1,o2) {
    G.bgRun = false;
};

dbarrowJs.prototype.onClick = function() {
};




