class Block{
  constructor(x, y,width, height ) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    
      this.image=loadImage("block.png");
      this.visibility=255;
    
    }
    display(){
      var angle = this.body.angle;
      var pos= this.body.position;
      
      

      if(this.body.speed<3){
        imageMode(CENTER);      
        image(this.image,pos.x,pos.y,this.width, this.height); 
        
      //super.display();
        }else{
       push();
       translate(pos.x, pos.y);
       rotate(angle);
       World.remove(world,this.body)  
       this.visibility-=5;
      tint(255,this.visibility)
      image(this.image,this.body.position.x,this.body.position.y,25,25);
      pop();
    }
    
    
    
    
    
    }
}