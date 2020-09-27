class Match3Block extends ccui.Layout{//The Blocks that are static in the game/background for the moving pieces
    constructor(xPosition, yPosition, xIndex, yIndex) {
        super();
        this.setContentSize(cc.winSize);
        this.scheduleUpdate();
        this.addComponent(new FitToWindow());
 
        this.xPos = xPosition;
        this.yPos = yPosition;
        this.xIndex = xIndex;
        this.yIndex = yIndex;

        this.createButton();
    }
    //draws the block which happens to be a button
    createButton() {
        let button = new ccui.Button(res.Block_png, res.Block_png);

        button.setScale9Enabled(true);
        button.setCapInsets(cc.rect(8, 8, 8, 8));
        button.setContentSize(cc.size(64, 64));

        button.setPosition(this.xPos, this.yPos);

        button.addClickEventListener(this.onClick.bind(this));
        this.addChild(button);
    }
    onClick() {
        this.getParent().interactibility.SelectTile(this.xIndex, this.yIndex);
    }
}