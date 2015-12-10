var cardJs = qc.defineBehaviour('qc.engine.cardJs', qc.Behaviour, function() {
    var self = this;
    self.idx = 1;
    self.parent = null;
}, {
    parent: qc.Serializer.NODE
});

cardJs.prototype.awake = function() {
    var self = this;
};

cardJs.prototype.update = function() {

};

cardJs.prototype.onClick = function() {
    var self = this;
    var frames = ['card_26.png','card_28.png','card_38.png'];
    if(self.parent.frame == this.gameObject.frame){
        self.parent.y = -50000;
        self.parent.frame = frames[G.game.math.random(0,2)];
        G.bgRun = true;
    }else{
        self.parent.frame = frames[G.game.math.random(0,2)];
    }
};