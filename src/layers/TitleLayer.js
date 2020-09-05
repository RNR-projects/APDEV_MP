class TitleLayer extends cc.Layer{
    constructor(){
        super();

        let size = cc.winSize;
        let titleLabel = new cc.LabelTTF("PONG", 'Pixel', 64);
        titleLabel.x = size.width / 2;
        titleLabel.y = size.height / 2;
        this.addChild(titleLabel);

        let startLabel = new cc.LabelTTF("press any key to start", 'Pixel', 32);
        startLabel.x = size.width / 2;
        startLabel.y = size.height / 2 - 200;
        this.addChild(startLabel);
        let toMainScene = new ToMainScene();
        this.addComponent(toMainScene);

        /*let titleLayout = new RelativeLayout();
        titleLayout.createCenterText("PONG",0,0,0,0);
        titleLayout.createCenterText("press any key to start",200,0,200,200);
        this.addChild(titleLayout);*/
    }
}