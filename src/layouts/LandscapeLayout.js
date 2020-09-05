class LandscapeLayout extends ccui.RelativeBox{
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
        
        this.addChild(score);
    }

    updateText() {
        let text = `Score: ${this.getParent().score}`;
        let score = new ccui.Text(text, "Pixel", 36);
        this.removeAllChildren(true);

        let layoutParameter = new ccui.RelativeLayoutParameter();
        layoutParameter.setAlign(ccui.RelativeLayoutParameter.PARENT_TOP_LEFT);
        score.setLayoutParameter(layoutParameter);

        this.addChild(score);
    }
}