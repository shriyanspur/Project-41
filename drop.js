class Drop {
    constructor(x, y, width, height) {
      var options = {
          friction: 0.1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.x = random(10, 390);
      this.y = random(-40, -400);
      this.width = width;
      this.height = height;
      this.image = loadImage("d.png");
      World.add(world, this.body);

      
    }
    display(){

      if(this.body.position.y > height) {
        Matter.Body.setPosition(this.body, {x: random(10, 390), y: random(-40, -800)});
      }

      var pos = this.body.position;
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.width, this.height);
    }
  }