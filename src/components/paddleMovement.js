class paddleMovement extends cc.Component {
    onEnter() {
        super.onEnter();
        this.listener = cc.EventListener.create({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: this.onKeyPressed.bind(this),
            onKeyReleased: this.onKeyReleased.bind(this)
        });
        cc.eventManager.addListener(this.listener,
            this.getOwner());
        this.movingLeft = false;
        this.moving = false;
        this.speed = 1000;
    }

    onKeyPressed(key, event) {
        if (key == 68) {
            this.movingLeft = false;
            this.moving = true;
        }
        else if (key == 65) {
            this.movingLeft = true;
            this.moving = true;
        }
        
    }

    onKeyReleased(key, event) {
        this.moving = false;
    }

    update(dt) {
        if (this.moving && !this.getOwner().getParent().getParent().isPaused) {
            if (this.movingLeft && this.getOwner().x > 5)
                this.getOwner().x = this.getOwner().x - this.speed * dt;
            else if (!this.movingLeft && this.getOwner().x + this.getOwner().width < this.getOwner().getParent().width - 5)
                this.getOwner().x = this.getOwner().x + this.speed * dt;
        }
    }
}