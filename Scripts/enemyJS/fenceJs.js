var fenceJs = qc.defineBehaviour('qc.engine.fenceJs', qc.Behaviour, function() {
}, {
});

fenceJs.prototype.awake = function() {
    G.game.timer.loop(G.loopcd, function(){
        var self = this;
        var rigid = self.getScript('qc.arcade.RigidBody');
        if(G.bgRun === true && self.gameObject.y > 0){
             rigid.moves = true;
             self.gameObject.y = self.gameObject.y - G.gamespeed;
        }else{
             rigid.moves = false;
        }        
	}, this);     
};

fenceJs.prototype.update = function() {
// 	var self = this;
//     var rigid = self.getScript('qc.arcade.RigidBody');
//     if(G.bgRun === true && self.gameObject.y > 0){
//          rigid.moves = true;
//          self.gameObject.y = self.gameObject.y - G.offset*G.game.time.deltaTime;
//     }else{
//          rigid.moves = false;
//     }
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
