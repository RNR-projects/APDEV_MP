class TitleScene extends cc.Scene{//Scene that contains the TitleLayer
    constructor(){
        super();
    }
    onEnter(){
        super.onEnter();
        
        let titleLayer = new TitleLayer();
        this.addChild(titleLayer)
    }
}