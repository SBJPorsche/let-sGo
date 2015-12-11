// define a user behaviour
var finddifJs = qc.defineBehaviour('qc.engine.finddifJs', qc.Behaviour, function() {
    // need this behaviour schedule in editor
    //this.runInEditor = true;
    var self = this;
    self.k1 = null;
    self.k2 = null;
    self.k3 = null;
    self.k4 = null;
    self.k5 = null;
    self.k6 = null;
    self.k7 = null;
    self.k8 = null;
    self.k9 = null;
}, {
    k1: qc.Serializer.NODE,
    k2: qc.Serializer.NODE,
    k3: qc.Serializer.NODE,
    k4: qc.Serializer.NODE,
    k5: qc.Serializer.NODE,
    k6: qc.Serializer.NODE,
    k7: qc.Serializer.NODE,
    k8: qc.Serializer.NODE,
    k9: qc.Serializer.NODE
});

// Awake is called when the script instance is being loaded.
finddifJs.prototype.awake = function() {
    var self = this;
    self.randomFucn();

    // 关注事件
    G.signal.add(function(p1, p2) {
        if(p1 === 'resetdiff'){
            G.game.log.trace('add event randomFucn');
            self.randomFucn();
        }
    });
    
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

finddifJs.prototype.randomFucn = function() {
    var self = this;
    var map = [self.k1,self.k2,self.k3,self.k4,self.k5,self.k6,self.k7,self.k8,self.k9];
    for (var i = 0; i < 9; i++) {
        map[i].frame = 'grass1.png';
    }
    map[G.game.math.random(0,8)].frame = 'grass2.png';
};

finddifJs.prototype.update = function() {
	var self = this;
//     var rigid = self.getScript('qc.arcade.RigidBody');
//     if(G.bgRun === true && self.gameObject.y > 0){
//          rigid.moves = true;
//          self.gameObject.y = self.gameObject.y - G.offset*G.game.time.deltaTime;
//     }else{
//          rigid.moves = false;
//     }
    
};

finddifJs.prototype.onCollide = function(o1,o2) {
    G.bgRun = false;
};

finddifJs.prototype.onClick = function() {
};



