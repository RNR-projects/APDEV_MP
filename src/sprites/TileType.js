class TileType extends ccui.Layout {
    constructor(xPosition, type) {
        super();

        this.xPos = xPosition;
        this.type = type;
    }

    CreatePiece() {
        let size = this.getParent();

        let image = new ccui.ImageView();
        image.loadTexture("res/star.png");
        image.ignoreContentAdaptWithSize(false);
        image.setContentSize(cc.size(50, 50));

        image.setPosition(this.xPos, size.height + 45);
        this.addChild(image);
    }

    FallDown(amount) {
        let size = this.getParent();
        let movingTo = cc.moveBy(1, 0, - size.height / 8 * amount);
        this.runAction(new cc.sequence(movingTo));
    }

    FallDownWithWait(amount) {
        let size = this.getParent();
        let movingTo = cc.moveBy(1, 0, - size.height / 8 * amount);
        let callFunc = new cc.callFunc(this.OnFinish, this);
        this.runAction(new cc.sequence(movingTo, callFunc));
    }

    MoveLeft() {
        let size = this.getParent();
        let movingTo = cc.moveBy(1, - size.width / 8, 0);
        let callFunc = new cc.callFunc(this.OnFinish, this);
        this.runAction(new cc.sequence(movingTo, callFunc));
    }

    MoveRight() {
        let size = this.getParent();
        let movingTo = cc.moveBy(1, size.width / 8, 0);
        this.runAction(new cc.sequence(movingTo));
    }

    MoveDown() {
        let size = this.getParent();
        let movingTo = cc.moveBy(1, 0, - size.height / 8);
        let callFunc = new cc.callFunc(this.OnFinish, this);
        this.runAction(new cc.sequence(movingTo, callFunc));
    }

    MoveUp() {
        let size = this.getParent();
        let movingTo = cc.moveBy(1, 0, size.height / 8);
        this.runAction(new cc.sequence(movingTo));
    }

    OnFinish() {
        this.getParent().CheckForMatches();
    }
}
