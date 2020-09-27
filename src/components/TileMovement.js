class TileMovement extends cc.Component {//Tile movement animations component
    onEnter() {
        super.onEnter();
    }
    //falls down x blocks
    FallDown(amount) {
        let size = this.getOwner().getParent();
        let movingTo = cc.moveBy(1, 0, - size.height / 8 * amount);
        this.getOwner().runAction(new cc.sequence(movingTo));
    }
    //falling animation that calls for the Match3Checker to check for new matches on end of the animation
    FallDownWithWait(amount) {
        let size = this.getOwner().getParent();
        let movingTo = cc.moveBy(1, 0, - size.height / 8 * amount);
        let callFunc = new cc.callFunc(this.OnFinish, this);
        this.getOwner().runAction(new cc.sequence(movingTo, callFunc));
    }
    //Animations for when the player moves tiles, movements pairs has one of them call the Match3Checker to check for matches after the animation ends
    MoveLeft() {
        let size = this.getOwner().getParent();
        let movingTo = cc.moveBy(1, - size.width / 8, 0);
        let callFunc = new cc.callFunc(this.OnFinish, this);
        this.getOwner().runAction(new cc.sequence(movingTo, callFunc));
    }

    MoveRight() {
        let size = this.getOwner().getParent();
        let movingTo = cc.moveBy(1, size.width / 8, 0);
        this.getOwner().runAction(new cc.sequence(movingTo));
    }

    MoveDown() {
        let size = this.getOwner().getParent();
        let movingTo = cc.moveBy(1, 0, - size.height / 8);
        let callFunc = new cc.callFunc(this.OnFinish, this);
        this.getOwner().runAction(new cc.sequence(movingTo, callFunc));
    }

    MoveUp() {
        let size = this.getOwner().getParent();
        let movingTo = cc.moveBy(1, 0, size.height / 8);
        this.getOwner().runAction(new cc.sequence(movingTo));
    }

    OnFinish() {
        this.getOwner().getParent().matchChecker.CheckForMatches();
    }
}