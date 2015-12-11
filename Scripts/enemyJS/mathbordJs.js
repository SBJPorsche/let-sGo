// define a user behaviour
var mathbordJs = qc.defineBehaviour('qc.engine.mathbordJs', qc.Behaviour, function() {
    // need this behaviour schedule in editor
    //this.runInEditor = true;
}, {
});

// Awake is called when the script instance is being loaded.
mathbordJs.prototype.awake = function() {
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

// Update is called every frame, if the behaviour is enabled.
mathbordJs.prototype.update = function() {
	var self = this;
//     var rigid = self.getScript('qc.arcade.RigidBody');
//     if(G.bgRun === true && self.gameObject.y > 0){
//          rigid.moves = true;
//          self.gameObject.y = self.gameObject.y - G.offset*G.game.time.deltaTime;
//     }else{
//          rigid.moves = false;
//     }
};

mathbordJs.prototype.onCollide = function(o1,o2) {
    G.bgRun = false;
};

mathbordJs.prototype.onClick = function() {
};


