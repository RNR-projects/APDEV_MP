class Match3Block extends ccui.Layout{
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
        this.getParent().SelectTile(this.xIndex, this.yIndex);
    }
    onFinish() {
        this.getParent().getParent().isPaused = false;
        this.getParent().removeChild(this);
    }

    /*constructor(xPos, yPos, width, height){
        super();
        this.x = xPos + 5;
        this.y = yPos + 5;  
        this.width = width;
        this.height = height;
    }
    onEnter(){
        super.onEnter();
        this.drawRect(cc.p(0,0), cc.p(this.width, this.height), cc.color(0,0,255,255));  
    }*/
}