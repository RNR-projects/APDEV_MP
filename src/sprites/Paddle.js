class Paddle extends cc.DrawNode{

    constructor(width, height){
        super();
        this.width = width;
        this.height = height;
        this.movement = new paddleMovement();
        this.addComponent(this.movement);
        this.scheduleUpdate();       
    }
    onEnter(){
        super.onEnter();
        let size = this.getParent();
        this.drawRect(cc.p(0,0), cc.p(this.width, this.height), cc.color(255,0,0,255));
        this.x = size.width/2 - this.width/2;
        this.y = size.height / 2 - 200        
    }
    update(dt) {
        this.movement.update(dt);
    }
}