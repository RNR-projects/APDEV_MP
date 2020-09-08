class PauseLayout extends ccui.Layout{
    constructor(){
        super();
        this.setContentSize(cc.winSize);
        this.scheduleUpdate();
        this.addComponent(new FitToWindow());
        this.createButton()
    }

    createButton(){
        let button = new ccui.Button( res.Button9Slice_png, res.Button9SliceSelected_png);

        button.setScale9Enabled(true);
        button.setCapInsets(cc.rect(20, 20, 20, 20));
        button.setContentSize(cc.size(100,50));

        button.setTitleFontSize(26)
        button.setTitleFontName("Pixel")
        button.setTitleText("Pause")

        button.setPositionType(ccui.Widget.POSITION_PERCENT);
        button.setPositionPercent(cc.p(0.85, 0.2));

        button.addClickEventListener(this.onClick.bind(this))
        this.addChild(button);
    }
    onClick() {
        if (!this.getParent().isPaused) {
            let popup = new NineSliceLayout();
            //disables all the buttons(Match3Blocks)
            for(let i = 0; i < 8; i++){
                for(let j = 0; j < 8; j++){
                    this.getParent().getChildByName("game").getChildByName(`block${i*8}${j}`).enabled = false;
                }
            }
            this.getParent().isPaused = true;
            this.addChild(popup);
        }
    }
}