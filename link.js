  class Link{

constructor(bodyA,bodyB){
 var posy= bodyA.body.bodies.length-2
this.link=Constraint.create({
    bodyA:bodyA.body.bodies[posy],
    pointA:{x:0,y:0},
    bodyB:bodyB,
    pointB:{x:0,y:0},
    length:0
})
World.add(world,this.link)
}








  }



