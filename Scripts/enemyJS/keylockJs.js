var keylockJs = qc.defineBehaviour('qc.engine.keylockJs', qc.Behaviour, function() {
    var self = this;
}, {
});

keylockJs.prototype.awake = function() {
    var self = this;
    var locks = ['suo.png','suo1.png'];
    
    self.gameObject.frame = locks[G.game.math.random(0,1)];
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

keylockJs.prototype.update = function() {
// 	var self = this;
//     var rigid = self.getScript('qc.arcade.RigidBody');
//     if(G.bgRun === true && self.gameObject.y > 0){
//          rigid.moves = true;
//          self.gameObject.y = self.gameObject.y - G.offset*G.game.time.deltaTime;
//     }else{
//          rigid.moves = false;
//     }
};

keylockJs.prototype.onCollide = function(o1,o2) {
    G.bgRun = false;
};

keylockJs.prototype.onClick = function() {
};

