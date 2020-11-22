class chain {
    constructor(bodyA,bodyB){
        var options ={

            bodyA:bodyA,
            bodyB:bodyB,
            length:10,
            stiffness:0.05
        }
        this.chain=Constraint.create(options)
        World.add(world,this.chain)
    }
display(){

    var Line1= this.chain.bodyA.position
    var Line2= this.chain.bodyB.position
    line(Line1.x,Line1.y,Line2.x,Line2.y)
}


}