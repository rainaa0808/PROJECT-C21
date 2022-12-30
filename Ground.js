class Ground{
    constructor(x,y,w,h){
        var ground_options = {
            isStatic : true
        }
        this.w = w
        this.h = h
        this.body = Bodies.rectangle(x,y,w,h,ground_options)
        World.add(world,this.body)
    }
    display(){
        push ()
        rectMode(CENTER)
        fill ("yellow")
        rect(this.body.position.x,this.body.position.y,this.w,this.h)



        pop ()
    }

}