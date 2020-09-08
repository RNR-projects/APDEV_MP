class ResultScene extends cc.Scene{    
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