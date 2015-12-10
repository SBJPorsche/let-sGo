// 定义本工程的名字空间
qc.letsGo = {};

// 用来存放所有的全局数据（函数、变量等）
window.G = qc.letsGo.G = {
};
G.bgRun = true;
G.distance = 0;
G.offset = 0.3;
G.playerDead = false;
G.playerRotation = 0;

// 初始化逻辑
qc.initGame = function(game) {
    game.log.trace('Start the game logic.');

    // 将game实例的引用记录下来，方便在其他逻辑脚本模块中访问
    G.game = game;
    G.signal = new qc.Signal();

    // TODO: 其他逻辑待补充
};
