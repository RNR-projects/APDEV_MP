class ResultScene extends cc.Scene{//Scene that contains the ResultLayer
    constructor(score){
        super();
        this.finalscore = score;
    }
    onEnter(){
        super.onEnter();
        
        let layer = new ResultLayer(this.finalscore);
        this.addChild(layer)
    }
}