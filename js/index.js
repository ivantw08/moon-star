var time=0;
var stars=[
  {
    el: ".blue",
    r: 280,
    speed: 0.6,
    width: 50
  },
   {
    el: ".yellow",
    r: 340,
    speed: 0.2,
    width: 70
  }
];

function update(){
  stars.forEach(function(star){        
  var r = star.r ; 
  var angle = star.speed*time*2;
  var x = r*Math.cos((angle/360)*(Math.PI*2)) -25 ;
  var y = r*Math.sin((angle/360)*(Math.PI*2)) -25 ;
  $(star.el).css("transform","translate("+x+"px,"+y+"px)")
  
  time+=1; 
                console.log(time);  
                });
  
}
setInterval(update,30);