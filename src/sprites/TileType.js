class TileType extends ccui.Layout {//The objects that the player needs to match at least 3 in a line for points
    constructor(xPosition, type) {//set the type of tile in the constructor
        super();

        this.xPos = xPosition;
        this.type = type;

        this.movement = new TileMovement();
        this.addComponent(this.movement);
    }
    //Draws the tile with the sprite that matches the type set in the constructor
    CreatePiece() {
        let size = this.getParent();
        //cc.sprite contains setTextureRect which we need for getting the right sprite from the spritesheet
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
                image.setTextureRect(cc.rect(0, 128, 128, 128));//the star is 128x128 so needs to be shrunk more than the rest
                image.setScaleY(0.5);
                image.setScaleX(0.5);
                break;
            case 6:
                image.setTextureRect(cc.rect(0, 256, 64, 64));
                break;
        }
        //the sprite is 64x64 but the background blocks are 50x50
        image.setScaleX(image.getScaleX() * 50 / 64);
        image.setScaleY(image.getScaleY() * 50 / 64);
        //put the sprite in the center of the correct block
        image.setPosition(this.xPos, size.height + 45);

        this.addChild(image);
    }
}
