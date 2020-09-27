class GameTextLandscapeLayout extends ccui.RelativeBox{//UI for score and timer text for Landscape orientation
    constructor(){
        super(cc.winSize);
        this.scheduleUpdate();
        this.addComponent(new FitToWindow());
        this.addComponent(new EnableOnLandscape());
    }
    onEnter(){
        super.onEnter();
        let text = `Score: ${this.getParent().score}`;
        let score = new ccui.Text(text, "Pixel", 36);
        
        let layoutParameter = new ccui.RelativeLayoutParameter();
        layoutParameter.setAlign(ccui.RelativeLayoutParameter.PARENT_TOP_LEFT);
        score.setLayoutParameter(layoutParameter);

        let timetext = `Time Left: ${this.getParent().time}`;
        let time = new ccui.Text(timetext, "Pixel", 36);
        
        let tlayoutParameter = new ccui.RelativeLayoutParameter();
        tlayoutParameter.setAlign(ccui.RelativeLayoutParameter.PARENT_TOP_RIGHT);
        time.setLayoutParameter(tlayoutParameter);
        
        this.addChild(score);
        this.addChild(time);        
    }
    //When the values are updated, the text must be recreated for some reason with how the text UI is created
    updateText() {
        let text = `Score: ${this.getParent().score}`;
        let score = new ccui.Text(text, "Pixel", 36);

        let timetext = `Time Left: ${this.getParent().time}`;
        let time = new ccui.Text(timetext, "Pixel", 36);

        this.removeAllChildren(true);

        let layoutParameter = new ccui.RelativeLayoutParameter();
        layoutParameter.setAlign(ccui.RelativeLayoutParameter.PARENT_TOP_LEFT);
        score.setLayoutParameter(layoutParameter);
        
        let tlayoutParameter = new ccui.RelativeLayoutParameter();
        tlayoutParameter.setAlign(ccui.RelativeLayoutParameter.PARENT_TOP_RIGHT);
        time.setLayoutParameter(tlayoutParameter);
        
        this.addChild(time);
        this.addChild(score);
    }
}