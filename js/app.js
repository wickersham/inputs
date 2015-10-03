function inputs() {
    //this function is called on load in the body

     var canvas = document.getElementById("canvas");
     if (canvas.getContext) {
     var ctx = canvas.getContext("2d");

            var upDir = false;
            var downDir = false;
            var leftDir =  false;
            var rightDir = false;
      
//var $direction = function() {
//      $(document).bind("keydown", "left", function() {
//      var left = true;
//      });
//      $(document).bind("keyup", "left", function() {
//      var left = false;
//      });
//    
//      $(document).bind("keydown", "right", function() {
//      var right = true;
//      });
//      $(document).bind("keyup", "right", function() {
//      var right = false;
//      });
//    
//      $(document).bind("keydown", "up", function() {
//      var up = true;
//      });
//      $(document).bind("keyup", "up", function() {
//      var up = false;
//      });
//    
//      $(document).bind("keydown", "down", function() {
//      var down = true;
//      });
//      $(document).bind("keyup", "down", function() {
//      var down = false;
//      });    
//      
//      if  ($direction.left === true) {
//          console.log("LEFT");
//      }
//    
//      };
      
      
      
      
      
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
      
    var buttonDown = function(x, y) {
        ctx.beginPath();
        ctx.fillStyle = "#666699";
        ctx.arc(x, y, 20, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
    };
      
      
    drawstick();
      
    balltop(101, 105);
      
      
      }
    
        document.addEventListener('keydown', function(event) {
            //left draws the balltop to the left of original position. also num4 and a  

            
            
        if(event.keyCode == 37 || event.keyCode == 65 || event.keyCode == 100) {
            var leftDir = true;
            ctx.beginPath();
            ctx.moveTo(101,105);
            ctx.lineTo(60,105);
            ctx.stroke();
            balltop(93, 105);
           
                
        }
            // right or num6 or d
        if(event.keyCode == 39 || event.keyCode == 68 || event.keyCode == 102) { 
            var rightDir = true;
            ctx.moveTo(101,105);
            ctx.lineTo(141,105);
            ctx.stroke();
            balltop(109, 105);
        }
            //up or num8 or w
        if(event.keyCode == 38 || event.keyCode == 87 || event.keyCode == 104) {
            var upDir = true;
            ctx.moveTo(101,105);
            ctx.lineTo(101,65);
            ctx.stroke();
            balltop(101, 97);
        }
            //down or s or num2
        if(event.keyCode == 40 || event.keyCode == 40 || event.keyCode == 98) { 
            var downDir = true;
            ctx.moveTo(101,105);
            ctx.lineTo(101,145);
            ctx.stroke();
            balltop(101, 113);
        }
    });
    
    if (leftDir == true && downDir == true) {
        balltop(200, 200);
    };

    
    window.addEventListener("gamepadconnected", function(e) {
  console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
  e.gamepad.index, e.gamepad.id,
  e.gamepad.buttons.length, e.gamepad.axes.length);
});
    
};
