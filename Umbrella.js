class Brell {
    constructor(x,y) {
      var options = {
          isStatic:true,
          'restitution':0.8,
          'friction':0.5,
          'density':1.0
      }
      this.body = Bodies.circle(x,y,95,options);
      this.radius = 95;
      
      World.add(world, this.body);
    }
    display(){
      ellipseMode(RADIUS);
      fill("blue")
      ellipse(this.body.position.x,this.body.position.y,this.radius)

    }
  };