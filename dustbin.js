class Dustbin{
    constructor(x,y){
    this.x=x 
    this.y=y
    this.dustbinwidth = 200
    this.dustbinheight = 100
    this.wallthickness = 20
    this.angle = 0;

    this.bottomBody = Bodies.rectangle(this.x, this.y, this.dustbinwidth, this.wallthickness,{isStatic:true});

    this.leftWallBody = Bodies.rectangle(this.x-this.dustbinwidth/2,this.y-this.dustbinheight/2, this.wallthickness,this.dustbinheight,{isStatic:true})
    Matter.Body.setAngle(this.leftWallBody,this.angle);

    this.rightWallBody = Bodies.rectangle(this.x+this.dustbinwidth/2, this.y-this.dustbinheight/2, this.wallthickness, this.dustbinheight,{isStatic:true})
    Matter.Body.setAngle(this.rightWallBody,-1*this.angle);

    World.add(world,this.bottomBody)
    World.add(world,this.leftWallBody)
    World.add(world,this.rightWallBody)
}
    display(){
       var bottomBodyPos = this.bottomBody.position
        var leftWallBodyPos = this.leftWallBody.position
        var rightWallBodyPos = this.rightWallBody.position
        
        push()
        translate(leftWallBodyPos.x,leftWallBodyPos.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        stroke(255);
        rotate(this.angle);
        rect(0,0,this.wallthickness,this.dustbinheight);
        pop()
        

        push()
        translate(rightWallBodyPos.x,rightWallBodyPos.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        stroke(255);
        rotate(-1*this.angle);
        rect(0,0,this.wallthickness,this.dustbinheight);
        pop()
        

        push()
        translate(bottomBodyPos.x,bottomBodyPos.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255)
        stroke(255)
        rect(0,0,this.wallthickness,this.dustbinwidth)
        pop()
        

    }
}
