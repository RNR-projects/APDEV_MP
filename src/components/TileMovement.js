class TileMovement extends cc.Component {
    onEnter() {
        super.onEnter();
    }

    FallDown(amount) {
        let size = this.getOwner().getParent();
        let movingTo = cc.moveBy(1, 0, - size.height / 8 * amount);
        this.getOwner().runAction(new cc.sequence(movingTo));
    }

    FallDownWithWait(amount) {
        let size = this.getOwner().getParent();
        let movingTo = cc.moveBy(1, 0, - size.height / 8 * amount);
        let callFunc = new cc.callFunc(this.OnFinish, this);
        this.getOwner().runAction(new cc.sequence(movingTo, callFunc));
    }

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