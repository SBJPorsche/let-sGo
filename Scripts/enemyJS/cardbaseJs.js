var cardbaseJs = qc.defineBehaviour('qc.engine.cardbaseJs', qc.Behaviour, function() {
    var self = this;
    self.timerShow = null;
    self.card1 = null;
    self.card2 = null;
    self.card3 = null;
    self.idx = 1;
}, {
    card1: qc.Serializer.NODE,
    card2: qc.Serializer.NODE,
    card3: qc.Serializer.NODE
});

// Awake is called when the script instance is being loaded.
cardbaseJs.prototype.awake = function() {
    var self = this;
    var frames = ['card_26.png','card_28.png','card_38.png'];
    var id = G.game.math.random(0, 2);
    self.gameObject.frame = frames[id];
};

// Update is called every frame, if the behaviour is enabled.
cardbaseJs.prototype.update = function() {
	var self = this;

    var frames = ['card_26.png','card_28.png','card_38.png'];
    self.idx++;
    if(self.idx%50 === 0){
        frames = G.game.math.shuffle(frames);
        self.card1.frame = frames[0];
        self.card2.frame = frames[1];
        self.card3.frame = frames[2];        
    }
};

cardbaseJs.prototype.onCollide = function(o1,o2) {
    G.bgRun = false;
};
