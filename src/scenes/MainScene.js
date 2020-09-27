class MainScene extends cc.Scene{//Scene that contains the game proper
    constructor(){
        super();
        this.time = 120;
        this.score = 0;
        this.isPaused = false;
    }
    onEnter(){
        super.onEnter();
        //game layer
        let gameLayer = new Match3Layer();
        gameLayer.setName("game");
        this.addChild(gameLayer);
        //UI layouts
        let landscapeUI = new GameTextLandscapeLayout();
        landscapeUI.setName("landscape");
        let portraitUI = new GameTextPortraitLayout();
        portraitUI.setName("portrait");
        let pauseButton = new PauseLandscapeLayout();
        let pausePortraitButton = new PausePortraitLayout();
        
        this.addChild(landscapeUI);
        this.addChild(portraitUI);
        this.addChild(pauseButton);
        this.addChild(pausePortraitButton);

        //Timer
        this.countdown = setInterval( () => {
            if(!this.isPaused){//update the UI every second
                this.time--;
                this.getChildByName("landscape").updateText();
                this.getChildByName("portrait").updateText();
            }
            if(this.time <= 0){//when time is up head to the results screen
                clearInterval(this.countdown);
                this.getChildByName("game").GameOver(this.score);
            }
        }, 1000); //1000 will  run it every 1 second/it is in ms
    }
    //every time the score should increase the text in the UI should update
    updateScores() {
        this.score += 10;
        this.getChildByName("landscape").updateText();
        this.getChildByName("portrait").updateText();
    }
}