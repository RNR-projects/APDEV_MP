class PongLayer extends cc.LayerColor{
    constructor(){
        super(cc.color(0, 100, 0, 255), 800, 700);

        this.boardMaker = new BoardMaker();
        this.boardMaker.setName("boardMaker");
        this.addComponent(this.boardMaker);
        this.tileManager = new TileManager();
        this.tileManager.setName("tileManager");
        this.addComponent(this.tileManager);
        this.matchChecker = new Match3Checker();
        this.matchChecker.setName("checker");
        this.addComponent(this.matchChecker);
        this.interactibility = new BoardInteractibility();
        this.interactibility.setName("interactibility");
        this.addComponent(this.interactibility);

        this.tileManager.Init();
        this.interactibility.Init();

        this.boardMaker.CreateGrid();
        this.boardMaker.FillWithTiles();

        this.addComponent(new GameLayerResizer());
    }
}