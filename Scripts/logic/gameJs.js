// define a user behaviour
var gameJs = qc.defineBehaviour('qc.engine.gameJs', qc.Behaviour, function() {
    // need this behaviour schedule in editor
    //this.runInEditor = true;
    var self = this;
    self.timerCreateEnemy = null;
    self.timerLoopbg = null;
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
    self.firebase = null;
    self.sortbase = null;
    self.lightingbase = null;    
    self.lightingbaseGr = null;
    self.lightingbaseR = null;
    self.lightingbaseRGr = null;
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
    dbarrow: qc.Serializer.NODE,
    firebase: qc.Serializer.NODE,
    sortbase: qc.Serializer.NODE,
    lightingbase: qc.Serializer.NODE,
    lightingbaseGr: qc.Serializer.NODE,
    lightingbaseR: qc.Serializer.NODE,
    lightingbaseRGr: qc.Serializer.NODE
});


// Awake is called when the script instance is being loaded.
gameJs.prototype.awake = function() {
    var self = this;
//     G.game.time.frameRate = 30;
    
	this.timerCreateEnemy = G.game.timer.loop(3000, this.createEnemy, this); 
    G.game.timer.loop(G.loopcd, function(){
        var self = this;
        self.updateGame(G.gamespeed);
    }, this); 
};

gameJs.prototype.update = function() {
    var self = this;
//     self.updateGame(G.offset*G.game.time.deltaTime);
};

// Update is called every frame, if the behaviour is enabled.
gameJs.prototype.updateGame = function(speedgame) {
    var self = this;
    var speed = speedgame;//
    if ( G.bgRun === true) {
        G.distance ++ ;
        self.bg1.y = self.bg1.y - speed;
        if (self.bg1.y < -self.bg1.height) {
            self.bg1.y = self.bg1.height-10;
        }
        self.bg2.y = self.bg2.y - speed;
        if (self.bg2.y < -self.bg2.height) {
            self.bg2.y = self.bg2.height-10;
        }
    }

    var rigidfence = self.fence.getScript('qc.arcade.RigidBody');
    if(self.fence.y > 0 && G.bgRun === true){
         rigidfence.moves = true;
         self.fence.y = self.fence.y - speed;
    }else{
         rigidfence.moves = false;
    }

    var rigidbird = self.bird.getScript('qc.arcade.RigidBody');
    if(self.bird.y > 0 && G.bgRun === true){
         rigidbird.moves = true;
         self.bird.y = self.bird.y - speed;
    }else{
         rigidbird.moves = false;
    }      

    var rigidarrowL = self.arrowL.getScript('qc.arcade.RigidBody');
    if(self.arrowL.y > 0 && G.bgRun === true){
         rigidarrowL.moves = true;
         self.arrowL.y = self.arrowL.y - speed;
    }else{
         rigidarrowL.moves = false;
    }    

    var rigidarrowR = self.arrowR.getScript('qc.arcade.RigidBody');
    if(self.arrowR.y > 0 && G.bgRun === true){
         rigidarrowR.moves = true;
         self.arrowR.y = self.arrowR.y - speed;
    }else{
         rigidarrowR.moves = false;
    }  

    var rigidkeylock = self.keylock.getScript('qc.arcade.RigidBody');
    if(self.keylock.y > 0 && G.bgRun === true){
         rigidkeylock.moves = true;
         self.keylock.y = self.keylock.y - speed;
    }else{
         rigidkeylock.moves = false;
    }   

    var rigidcardbase = self.cardbase.getScript('qc.arcade.RigidBody');
    if(self.cardbase.y > 0 && G.bgRun === true){
         rigidcardbase.moves = true;
         self.cardbase.y = self.cardbase.y - speed;
    }else{
         rigidcardbase.moves = false;
    }  

    var rigidmathbord = self.mathbord.getScript('qc.arcade.RigidBody');
    if(self.mathbord.y > 0 && G.bgRun === true){
         rigidmathbord.moves = true;
         self.mathbord.y = self.mathbord.y - speed;
    }else{
         rigidmathbord.moves = false;
    } 

    var rigidfinddif = self.finddif.getScript('qc.arcade.RigidBody');
    if(self.finddif.y > 0 && G.bgRun === true){
         rigidfinddif.moves = true;
         self.finddif.y = self.finddif.y - speed;
    }else{
         rigidfinddif.moves = false;
    }   

    var rigiddbarrow = self.dbarrow.getScript('qc.arcade.RigidBody');
    if(self.dbarrow.y > 0 && G.bgRun === true){
         rigiddbarrow.moves = true;
         self.dbarrow.y = self.dbarrow.y - speed;
    }else{
         rigiddbarrow.moves = false;
    }   

    var rigidfirebase = self.firebase.getScript('qc.arcade.RigidBody');
    if(self.firebase.y > 0 && G.bgRun === true){
         rigidfirebase.moves = true;
         self.firebase.y = self.firebase.y - speed;
    }else{
         rigidfirebase.moves = false;
    }    

    var rigidsortbase = self.sortbase.getScript('qc.arcade.RigidBody');
    if(self.sortbase.y > 0 && G.bgRun === true){
         rigidsortbase.moves = true;
         self.sortbase.y = self.sortbase.y - speed;
    }else{
         rigidsortbase.moves = false;
    }  

    var rigidlightingbase = self.lightingbase.getScript('qc.arcade.RigidBody');
    if(self.lightingbase.y > 0 && G.bgRun === true){
         rigidlightingbase.moves = true;
         self.lightingbase.y = self.lightingbase.y - speed;
    }else{
         rigidlightingbase.moves = false;
    }
    if(G.bgRun === true && self.lightingbase.y < 0){
         self.lightingbase.y = -1000;
    }
        
    var rigidlightingbaseR = self.lightingbaseR.getScript('qc.arcade.RigidBody');
    if(self.lightingbaseR.y > 0 && G.bgRun === true){
         rigidlightingbaseR.moves = true;
         self.lightingbaseR.y = self.lightingbaseR.y - speed;
    }else{
         rigidlightingbaseR.moves = false;
    }   
    if(G.bgRun === true && self.lightingbaseR.y < 0){
         self.lightingbaseR.y = -1000;
    }    
          
};

gameJs.prototype.createEnemy = function() {
    var self = this;
    var id = G.game.math.random(0, 12);
//     id = 11;
    if(G.bgRun === true){      
        switch (id)
        {
        case 0:
            if(self.fence.y < 0){
                self.fence.getScript('qc.arcade.RigidBody').addCollide(self.player);
                self.fence.y = G.game.height + 1500;
            }
            break;
        case 1:
            if(self.bird.y < 0){
                self.bird.getScript('qc.arcade.RigidBody').addCollide(self.player);
                self.bird.y = G.game.height + 1500;
            }    
            break;
        case 2:
            if(self.arrowL.y < 0){
                self.arrowL.getScript('qc.arcade.RigidBody').addCollide(self.player);
                self.arrowL.y = G.game.height + 1500;
            }                
            break;
        case 3:
            if(self.arrowR.y < 0){
                self.arrowR.getScript('qc.arcade.RigidBody').addCollide(self.player);
                self.arrowR.y = G.game.height + 1500;
            }                
            break;
        case 4:
            if(self.keylock.y < 0){
                self.keylock.getScript('qc.arcade.RigidBody').addCollide(self.player);
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
                self.mathbord.getScript('qc.arcade.RigidBody').addCollide(self.player);
                self.mathbord.y = G.game.height + 1500;
            }                
            break;
        case 7:
            if(self.finddif.y < 0){
                self.finddif.getScript('qc.arcade.RigidBody').addCollide(self.player);
                self.finddif.y = G.game.height + 1500;
            }                
            break;  
        case 8:
            if(self.dbarrow.y < 0){
                self.dbarrow.getScript('qc.arcade.RigidBody').addCollide(self.player);
                self.dbarrow.y = G.game.height + 1500;
            }                
            break;  
        case 9:
            if(self.firebase.y < 0){
                self.firebase.getScript('qc.arcade.RigidBody').addCollide(self.player);
                self.firebase.y = G.game.height + 1500;
            }                
            break;    
        case 10:
            if(self.sortbase.y < 0){
                self.sortbase.getScript('qc.arcade.RigidBody').addCollide(self.player);
                self.sortbase.y = G.game.height + 1500;
            }                
            break; 
        case 11:
            if(self.lightingbase.y < 0){
                self.lightingbaseGr.getScript('qc.arcade.RigidBody').addCollide(self.player);
//                 self.lightingbaseGr.y = 30;
                self.lightingbase.y = G.game.height + 1500;
            }                
            break;                
        case 12:
            if(self.lightingbaseR.y < 0){
                self.lightingbaseRGr.getScript('qc.arcade.RigidBody').addCollide(self.player);
//                 self.lightingbaseRGr.y = 30;
                self.lightingbaseR.y = G.game.height + 1500;
            }                
            break;                
        }        
    }
};
