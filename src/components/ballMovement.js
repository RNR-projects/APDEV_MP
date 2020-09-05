class ballMovement extends cc.Component {
    onEnter() {
        super.onEnter();
        this.movingLeft = true;
        this.movingDown = true;
        this.speed = 300;
    }

    update(dt) {
        if (!this.getOwner().getParent().getParent().isPaused) {
            let paddle = this.getOwner().getParent().getChildByName("paddle");
            if (this.movingLeft)
                this.getOwner().x -= this.speed * dt;
            else
                this.getOwner().x += this.speed * dt;
            if (this.movingDown)
                this.getOwner().y -= this.speed * dt;
            else
                this.getOwner().y += this.speed * dt;

            if (this.getOwner().x > this.getOwner().getParent().width - 75)
                this.movingLeft = true;
            else if (this.getOwner().x < -25)
                this.movingLeft = false;
            if (this.getOwner().y > this.getOwner().getParent().height - 75)
                this.movingDown = true;
            if (this.getOwner().y - 25 < paddle.y && this.getOwner().y > paddle.y - paddle.height)
                if (this.getOwner().x + 75 > paddle.x && this.getOwner().x + 25 < paddle.x + paddle.width) {
                    if (this.movingDown) {
                        this.getOwner().getParent().getParent().score++;
                        this.getOwner().getParent().getParent().updateScores();
                        this.movingDown = false;
                    }
                }
            if (this.getOwner().y < -25)
                this.getOwner().y = this.getOwner().getParent().height - 75;
        }
    }
}