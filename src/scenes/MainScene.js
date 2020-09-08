class MainScene extends cc.Scene{    
    constructor(){
        super();
        this.time = 120;
        this.score = 0;
        this.isPaused = false;
    }
    onEnter(){
        super.onEnter();
        
        let pongLayer = new PongLayer();
        pongLayer.setName("game");
        this.addChild(pongLayer);
        
        let landscapeUI = new LandscapeLayout();
        landscapeUI.setName("landscape");
        let portraitUI = new PortraitLayout();
        portraitUI.setName("portrait");
        let pauseButton = new PauseLayout();
        
        this.addChild(landscapeUI);
        this.addChild(portraitUI);
        this.addChild(pauseButton);
        this.countdown = setInterval( () => {
            if(!this.isPaused){
                this.time--;
                this.getChildByName("landscape").updateText();
                this.getChildByName("portrait").updateText();
            }
            if(this.time <= 0){
                clearInterval(this.countdown);
                //temporary game over
                for(let i = 0; i < 8; i++){
                    for(let j = 0; j < 8; j++){
                        this.getParent().getChildByName("game").getChildByName(`block${i*8+j}`).enabled = false;
                    }
                }
            }
        }, 1000); //1000 will  run it every 1 second
    }
    
    updateScores() {
        this.score += 10;
        this.getChildByName("landscape").updateText();
        this.getChildByName("portrait").updateText();
    }
}