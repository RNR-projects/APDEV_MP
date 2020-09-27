class ResultLayer extends cc.Layer{//Layer for the results screen
    constructor(score){
        super();
        this.finalscore = score;
        this.addChild(new ResultLandscapeLayout(this.finalscore));
        this.addChild(new ResultPortraitLayout(this.finalscore));
    }
}