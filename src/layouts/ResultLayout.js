class ResultLayout extends ccui.Layout{
    constructor(score){
        super();
        this.finalscore = score;
        this.setContentSize(cc.winSize);
        this.scheduleUpdate();
        this.createScreen();
        this.createResult();
        this.createRetry();
        this.createTitle();
        this.addComponent(new FitToWindow);
    }

    createScreen(){
        let screen = new ccui.RelativeBox();
        this.screen = screen
        screen.setAnchorPoint(cc.p(0.5,0.5));
        screen.setPositionType(ccui.Widget.POSITION_PERCENT);
        screen.setPositionPercent(cc.p(.50,.50) );
        screen.setSizeType(ccui.Widget.SIZE_PERCENT);
        screen.setSizePercent(cc.p(1, 1));
        screen.addComponent(new FitToWindow);

        // screen.setBackGroundImageScale9Enabled(true);
        // screen.setBackGroundImage(res.Button9Slice_png,ccui.Widget.LOCAL_TEXTURE);
        // let insetSize = 20;
        // screen.setBackGroundImageCapInsets(cc.rect(insetSize, insetSize, insetSize, insetSize))

        this.addChild(screen);
    }
    
    createResult(){
        let screen = this.screen
        
        let gameover = new ccui.Text(`GAME OVER`, "Pixel", 48);
        gameover.setSizeType( ccui.Widget.SIZE_PERCENT );
        gameover.setSizePercent(cc.p(1, 1));
        
        let glayoutParameter = new ccui.RelativeLayoutParameter();
        glayoutParameter.setAlign(ccui.RelativeLayoutParameter.PARENT_TOP_CENTER_HORIZONTAL);
        glayoutParameter.setMargin(0, 200, 0, 0);
        gameover.setLayoutParameter(glayoutParameter);

        let score = new ccui.Text(`Score: ${this.finalscore}`, "Pixel", 36);
        score.setSizeType( ccui.Widget.SIZE_PERCENT );
        score.setSizePercent(cc.p(1, 1));
        
        let slayoutParameter = new ccui.RelativeLayoutParameter();
        slayoutParameter.setAlign(ccui.RelativeLayoutParameter.PARENT_TOP_CENTER_HORIZONTAL);
        slayoutParameter.setMargin(0, 400, 0, 0);
        score.setLayoutParameter(slayoutParameter);
    
        screen.addChild(gameover);
        screen.addChild(score);
    }

    createRetry(){
        let screen = this.screen
        
        let button = new ccui.Button(res.Button9Slice_png, res.Button9SliceSelected_png, res.Button9SliceLogo_png, ccui.Widget.LOCAL_TEXTURE);
        button.setScale9Enabled(true);
        button.setCapInsets(cc.rect(20, 20, 20, 20));
        button.setContentSize(cc.size(100,50));

        button.setTitleText("Retry");
        button.setTitleFontName("Pixel");
        button.setTitleFontSize(26);

        let layoutParameter = new ccui.RelativeLayoutParameter();
        layoutParameter.setAlign(ccui.RelativeLayoutParameter.PARENT_LEFT_BOTTOM);
        layoutParameter.setMargin(0.125 * this.getContentSize().x, 0, 0, 0.2 * this.getContentSize().y);
        button.setLayoutParameter(layoutParameter);

        button.addClickEventListener(this.onRetryClick.bind(this))
        screen.addChild(button);
    }

    createTitle(){
        let screen = this.screen
        
        let button = new ccui.Button(res.Button9Slice_png, res.Button9SliceSelected_png, res.Button9SliceLogo_png, ccui.Widget.LOCAL_TEXTURE);
        button.setScale9Enabled(true);
        button.setCapInsets(cc.rect(20, 20, 20, 20));
        button.setContentSize(cc.size(100,50));
        
        button.setTitleText("Title");
        button.setTitleFontName("Pixel");
        button.setTitleFontSize(26);

        let layoutParameter = new ccui.RelativeLayoutParameter();
        layoutParameter.setAlign(ccui.RelativeLayoutParameter.PARENT_RIGHT_BOTTOM);
        layoutParameter.setMargin(0, 0, 0.125 * this.getContentSize().x, 0.2 * this.getContentSize());
        button.setLayoutParameter(layoutParameter);

        button.addClickEventListener(this.onTitleClick.bind(this))
        screen.addChild(button);
    }

    onRetryClick(button){
        cc.director.runScene(new MainScene);
    }

    onTitleClick(button){
        cc.director.runScene(new TitleScene);
    }    
}