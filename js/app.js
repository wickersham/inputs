function inputs() {
    //this function is called on load in the body

  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

      
    //draw the stick
    var drawstick = function() {
        ctx.beginPath();
        ctx.lineWidth="6";
        ctx.strokeStyle="black";
        ctx.fillStyle="white";
        ctx.rect(1, 1, 396, 223);
        ctx.stroke(); 
        
        
        ctx.beginPath();
        ctx.arc(314, 82, 18, 0, 2*Math.PI);
        ctx.fillStyle="black";
        ctx.fill();
        ctx.stroke();  

        ctx.beginPath();
        ctx.arc(230, 118, 18, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();  

        ctx.beginPath();
        ctx.arc(272, 120, 18, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(314, 122, 18, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
        
        ctx.beginPath();
        ctx.arc(230, 78, 18, 0, 2*Math.PI);
        ctx.lineWidth="3";
        ctx.fillStyle="#00CC00";
        
        ctx.fill();
        ctx.stroke();
        
        ctx.beginPath();
        ctx.rect(71, 75, 61, 61);
        ctx.stroke();
        

        ctx.beginPath();
        ctx.arc(272, 80, 18, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
        
        
        ctx.beginPath();
        ctx.arc(193, 95, 18, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(190, 134, 18, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
    };
          //draw stick ends

      
      
      //balltop function draws stick position at position (x, y)
    var balltop = function(x, y) {
    ctx.beginPath();
    ctx.fillStyle="#00CC00";
    ctx.arc(x, y, 20, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
//        balltop.x = 101
//        balltop.y = 105
    };
      
    drawstick();
      
    balltop(101, 105);

      
      
      
      
      
      }
    
        document.addEventListener('keydown', function(event) {
            //left draws the balltop to the left of original position
        if(event.keyCode == 37) {
            //right and left respectively
            
            ctx.beginPath();
            ctx.moveTo(101,105);
            ctx.lineTo(60,105);
            ctx.stroke();
            drawstick();
            balltop(93, 105);
            drawstick();
        }
            
        if(event.keyCode == 39) { 
            drawstick();
            ctx.moveTo(101,105);
            ctx.lineTo(141,105);
            ctx.stroke();
            balltop(109, 105);
        }
            //up and down respectively
        if(event.keyCode == 38) {
            drawstick();
            ctx.moveTo(101,105);
            ctx.lineTo(101,65);
            ctx.stroke();
            balltop(101, 97);
        }
        if(event.keyCode == 40) { 
            drawstick();
            ctx.moveTo(101,105);
            ctx.lineTo(101,145);
            ctx.stroke();
            balltop(101, 113);
        }
    });
    
    document.addEventListener('keydown', function(event) {
    
    
    };
    
    window.addEventListener("gamepadconnected", function(e) {
  console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
  e.gamepad.index, e.gamepad.id,
  e.gamepad.buttons.length, e.gamepad.axes.length);
});
    
};
