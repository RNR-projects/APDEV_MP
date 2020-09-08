class ResultLayer extends cc.Layer{
    constructor(score){
        super();
        this.finalscore = score;
        this.addChild(new ResultLayout(this.finalscore));
    }
}