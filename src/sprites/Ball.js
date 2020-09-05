class Ball extends cc.DrawNode {

    constructor() {
        super();
        //this.movement = new ballMovement();
        //this.addComponent(this.movement);
        //this.scheduleUpdate();
    }
    onEnter() {
        super.onEnter();
        let size = this.getParent();
        this.drawDot(cc.p(50, 50), 25, cc.color(255, 0, 0, 255));
        this.x = size.width - 75;
        this.y = size.height - 75;
    }
    //update(dt) {
    //    this.movement.update(dt);
    //}
}