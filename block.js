class block{
    constructor(x, y, width, height){
      var options = {
          restitution:0.4,
          friction:0.0,
          //isStatic:true

      }
      this.visibility=225;
      this.object=Bodies.rectangle(x,y,width, height, options);
      this.width=width;
      this.height=height;
      World.add(world);
    }

    display(){
        console.log(this.body.speed);
        if(this.body.speed<3){
            var angle = this.body.angle;
            var pos = this.body.position;
        
        push ();
        translate(pos.x, pos.y);
        rotate (angle);
        rectMode (CENTER);
        rect(0,0,this.width, this.height);
        pop ();
        }else{
            World.remove(world);
            push ();
            tint (255, this.body);
            this.visibility= this.visibility -6;
            pop ();

        }
    }
}
 