// define a user behaviour
var gameJs = qc.defineBehaviour('qc.engine.gameJs', qc.Behaviour, function() {
    // need this behaviour schedule in editor
    //this.runInEditor = true;
    var self = this;
    self.timerCreateEnemy = null;
    self.bg1 = null;
    self.bg2 = null;
    self.player = null;
    self.fence = null;
    self.bird = null;
    self.arrowL = null;
    self.arrowR = null;
    self.keylock = null;
    self.cardbase = null;
    self.mathbord = null;
    self.finddif = null;
    self.dbarrow = null;
}, {
    // fields need to serialize
    bg1: qc.Serializer.NODE,
    bg2: qc.Serializer.NODE,
    player: qc.Serializer.NODE,
    fence: qc.Serializer.NODE,
    bird: qc.Serializer.NODE,
    arrowL: qc.Serializer.NODE,
    arrowR: qc.Serializer.NODE,
    keylock: qc.Serializer.NODE,
    cardbase: qc.Serializer.NODE,
    mathbord: qc.Serializer.NODE,
    finddif: qc.Serializer.NODE,
    dbarrow: qc.Serializer.NODE
});


// Awake is called when the script instance is being loaded.
gameJs.prototype.awake = function() {
    var self = this;
    
	this.timerCreateEnemy = G.game.timer.loop(3000, this.createEnemy, this); 
};

// Update is called every frame, if the behaviour is enabled.
gameJs.prototype.update = function() {
    var self = this;
	if ( G.bgRun === true) {
        G.distance ++ ;
        self.bg1.y = self.bg1.y - G.offset * G.game.time.deltaTime;
        if (self.bg1.y < -self.bg1.height) {
            self.bg1.y = self.bg1.height-10;
        }
        self.bg2.y = self.bg2.y - G.offset * G.game.time.deltaTime;
        if (self.bg2.y < -self.bg2.height) {
            self.bg2.y = self.bg2.height-10;
        }
    }    
};

gameJs.prototype.createEnemy = function() {
    var self = this;
    var id = G.game.math.random(0, 8);
//     id = 5;
    if(G.bgRun === true){      
        switch (id)
        {
        case 0:
            if(self.fence.y < 0){
                self.fence.y = G.game.height + 1500;
            }
            break;
        case 1:
            if(self.bird.y < 0){
                self.bird.y = G.game.height + 1500;
            }    
            break;
        case 2:
            if(self.arrowL.y < 0){
                self.arrowL.y = G.game.height + 1500;
            }                
            break;
        case 3:
            if(self.arrowR.y < 0){
                self.arrowR.y = G.game.height + 1500;
            }                
            break;
        case 4:
            if(self.keylock.y < 0){
                self.keylock.y = G.game.height + 1500;
            }                
            break;
        case 5:
            if(self.cardbase.y < 0){
                self.cardbase.y = G.game.height + 1500;
            }                
            break;
        case 6:
            if(self.mathbord.y < 0){
                self.mathbord.y = G.game.height + 1500;
            }                
            break;
        case 7:
            if(self.finddif.y < 0){
                self.finddif.y = G.game.height + 1500;
            }                
            break;  
        case 8:
            if(self.dbarrow.y < 0){
                self.dbarrow.y = G.game.height + 1500;
            }                
            break;                  
        }
    }
};