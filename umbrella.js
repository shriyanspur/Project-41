class Umbrella {
    constructor(x, y, radius) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.image = loadImage("man.png");
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position; 
      imageMode(CENTER);
      image(this.image, pos.x-15, pos.y+15, 200, 277);
    }
  }