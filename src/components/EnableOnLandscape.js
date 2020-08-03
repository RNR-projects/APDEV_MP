class EnableOnLandscape extends ResizeListener{
    constructor(){
        super();
        this.setName("EnableOnLandscape");
    }
    onEnter(){
        super.onEnter();
        this.onResize();
    }
    onResize(){
        if(cc.winSize.width >= cc.winSize.height){
            this.getOwner().setEnabled (true);
            this.getOwner().setVisible(true);
        }
        else{
            this.getOwner().setEnabled (false);
            this.getOwner().setVisible(false);
        }
    }

}