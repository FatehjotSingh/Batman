class Drop {
    constructor(x,y) {
      var options = {
          
          'friction':0.5,
          'density':1.0
      }
      this.body = Bodies.circle(x,y,7.5,options);
      this.radius = 7.5;
      
      World.add(world, this.body);
    }
    display(){
      ellipseMode(RADIUS);
      fill("blue")
      ellipse(this.body.position.x,this.body.position.y,this.radius)

    }
  };