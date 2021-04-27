class Drop {
    constructor(x, y) {
        var d_options = {
            restitution : 0.3,
            friction : 0.01,
            density : 0.1
        }
        this.body = Bodies.circle(x, y, 4, d_options);
        this.radius = 4
        World.add(world, this.body);
      }

display() 

{
    var position = this.body.position;

     fill("blue")
     ellipseMode(RADIUS);
     ellipse(position.x,position.y,this.radius);
}
    update()
    {
        if(this.body.position.y > height){
        Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
        }
    }
}
