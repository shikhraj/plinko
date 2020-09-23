class Plinko {
    constructor(x, y, radius) {
        var options  ={
            isStatic:true
            
          }
  
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = 2 * radius;
  
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      fill("red");
      ellipse(pos.x , pos.y, this.radius);
  
    }
  };
  class Plinko2 {
    constructor(x, y, radius) {
        var options  ={
            isStatic:true
            
          }
  
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = 2 * radius;
  
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      fill("green");
      ellipse(pos.x , pos.y, this.radius);
  
    }
  };
  class Plinko3{
    constructor(x, y, radius) {
        var options  ={
            isStatic:true
            
          }
  
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = 2 * radius;
  
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      fill("black");
      ellipse(pos.x , pos.y, this.radius);
  
    }
  };
  class Plinko4 {
    constructor(x, y, radius) {
        var options  ={
            isStatic:true
            
          }
  
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = 2 * radius;
  
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      fill("gold");
      ellipse(pos.x , pos.y, this.radius);
  
    }
  };