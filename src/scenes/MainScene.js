class MainScene extends cc.Scene{    
    constructor(){
        super();
        this.score = 0;
        this.isPaused = false;
    }
    onEnter(){
        super.onEnter();
        
        let pongLayer = new PongLayer();
        this.addChild(pongLayer);
        let landscapeUI = new LandscapeLayout();
        landscapeUI.setName("landscape");
        let portraitUI = new PortraitLayout();
        portraitUI.setName("portrait");
        let pauseButton = new PauseLayout();

        this.addChild(landscapeUI);
        this.addChild(portraitUI);
        this.addChild(pauseButton);
    }

    updateScores() {
        this.getChildByName("landscape").updateText();
        this.getChildByName("portrait").updateText();
    }
}