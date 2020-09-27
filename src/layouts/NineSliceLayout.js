class NineSliceLayout extends ccui.Layout{//Popup from pausing the game
    constructor(){
        super();
        this.setContentSize(cc.winSize);
        this.scheduleUpdate();
        this.addComponent(new FitToWindow());

        this.createPopup();
        this.createButton()


    }

    createPopup(){
        let popUp = new ccui.RelativeBox();
        this.popUp = popUp
        popUp.setAnchorPoint(cc.p(0.5,0.5));
        popUp.setPositionType(ccui.Widget.POSITION_PERCENT);
        popUp.setPositionPercent(cc.p(.50,.50) );
        popUp.setSizeType(ccui.Widget.SIZE_PERCENT);
        popUp.setSizePercent(cc.p(.50, .50));

        popUp.setBackGroundImageScale9Enabled(true);
        popUp.setBackGroundImage(res.Button9Slice_png,ccui.Widget.LOCAL_TEXTURE);
        let insetSize = 20;
        popUp.setBackGroundImageCapInsets(cc.rect(insetSize, insetSize, insetSize, insetSize))

        this.addChild(popUp);

    }

    createButton(){
        let popUp = this.popUp
        let button = new ccui.Button( res.Button9Slice_png, res.Button9SliceSelected_png);

        button.setScale9Enabled(true);
        button.setCapInsets(cc.rect(20, 20, 20, 20));
        button.setContentSize(cc.size(100,50));

        button.setTitleFontSize(26)
        button.setTitleFontName("Pixel")
        button.setTitleText("Resume")

        let layoutParameter = new ccui.RelativeLayoutParameter();
        layoutParameter.setAlign(ccui.RelativeLayoutParameter.PARENT_BOTTOM_CENTER_HORIZONTAL);
        layoutParameter.setMargin(0,0,0,20);
        button.setLayoutParameter(layoutParameter);

        button.addClickEventListener(this.onClick.bind(this))
        popUp.addChild(button);
    }
    onClick(){
        //enables all the buttons(Match3Blocks)
        for(let i = 0; i < 8; i++){
            for(let j = 0; j < 8; j++){
                this.getParent().getParent().getChildByName("game").getChildByName(`block${i*8}${j}`).enabled = true;
            }
        }
        let scaleTo = new cc.ScaleTo(0.2,0.0);
        let callFunc = new cc.callFunc(this.onFinish, this);
        scaleTo = new cc.EaseBackIn(scaleTo)
        this.popUp.runAction(new cc.sequence(scaleTo, callFunc));
    }
    onFinish() {
        this.getParent().getParent().isPaused = false;
        this.getParent().removeChild(this);
    }

}