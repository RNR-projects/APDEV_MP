class Match3Layer extends cc.LayerColor{//Game layer
    constructor(){
        super(cc.color(0, 100, 0, 255), 800, 700);
        //Create the components needed for the match 3 game
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
        //Initialize the components' variables to be used in the other components
        this.tileManager.Init();
        this.interactibility.Init();
        //Create the starting board for the game session
        this.boardMaker.CreateGrid();
        this.boardMaker.FillWithTiles();
        
        this.addComponent(new GameLayerResizer());
    }

    GameOver(score){
        //Stops all buttons from working
        //temporary game over
        for(let i = 0; i < 8; i++){
            for(let j = 0; j < 8; j++){
                this.getChildByName(`block${i*8}${j}`).enabled = false;
            }
        }
        // this.addComponent(new ToResultScene(score));
        cc.director.runScene(new ResultScene(score));
    }
}