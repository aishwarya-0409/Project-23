class Box{
    constructor(x,y,width,height){
      var box_option = { isStatic : true }
      this.box = Bodies.rectangle(x,y,width,height,box_option)
      
      this.width = width;
      this.height = height;
      World.add(world,this.box);
    }
    display(){
      var pos = this.box.position
      rectMode(CENTER);
      fill("red");
       rect(pos.x, pos.y, this.width, this.height);
    
    }
  }
  