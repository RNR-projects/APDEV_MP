class TileType extends ccui.Layout {
    constructor(xPosition, type) {
        super();

        this.xPos = xPosition;
        this.type = type;

        this.movement = new TileMovement();
        this.addComponent(this.movement);
    }

    CreatePiece() {
        let size = this.getParent();

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
}
