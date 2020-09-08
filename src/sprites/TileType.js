class TileType extends ccui.Layout {
    constructor(xPosition, type) {
        super();

        this.xPos = xPosition;
        this.type = type;
    }

    CreatePiece() {
        let size = this.getParent();

        /*var tex;
        switch (this.type) {
            case 1:
                tex = res.Star_png;
                break;
            case 2:
                tex = res.Tree_png;
                break;
            case 3:
                tex = res.Fish_png;
                break;
            case 4:
                tex = res.Marble_png;
                break;
            case 5:
                tex = res.Gem_png;
                break;
            case 6:
                tex = res.Mushroom_png;
                break;
        }*/

        let image = new cc.Sprite();
        image.setTexture(res.tileSpriteSheet_png);
        switch (this.type) {
            case 1:
                image.setTextureRect(cc.rect(0, 0, 64, 64));
                break;
            case 2:
                image.setTextureRect(cc.rect(64, 0, 64, 64));
                break;
            case 3:
                image.setTextureRect(cc.rect(0, 64, 64, 64));
                break;
            case 4:
                image.setTextureRect(cc.rect(64, 64, 64, 64));
                break;
            case 5:
                image.setTextureRect(cc.rect(0, 128, 128, 128));
                image.setScaleY(0.5);
                image.setScaleX(0.5);
                break;
            case 6:
                image.setTextureRect(cc.rect(0, 256, 64, 64));
                break;
        }

        image.setScaleX(image.getScaleX() * 50 / 64);
        image.setScaleY(image.getScaleY() * 50 / 64);

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
