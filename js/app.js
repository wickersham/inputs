function inputs() {
    
    //this function is called on load in the body

     var canvas = document.getElementById("canvas");
     if (canvas.getContext) {
     var ctx = canvas.getContext("2d");

        var upDir = false;
        var downDir = false;
        var leftDir =  false;
        var rightDir = false;
        var punch = false;
         
        var urDir = false;
        var ulDir = false;
        var drDir = false;
        var dlDir = false;

     var inputsArray = [];
      
      
    //draw the stick
    var drawstick = function() {
        ctx.beginPath();
        ctx.lineWidth="6";
        ctx.strokeStyle="black";
        ctx.fillStyle="white";
        ctx.rect(1, 1, 396, 223);
        ctx.stroke(); 
        
        //draw buttons
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

      
      
      //balltop function draws the ball at position at position (x, y)
    var balltop = function(x, y) {
        ctx.beginPath();
        ctx.fillStyle="#00CC00";
        ctx.arc(x, y, 20, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
//        balltop.x = 101
//        balltop.y = 105
    };
      //draws a gray button at (x, y)
    var buttonDown = function(x, y) {
        ctx.beginPath();
        ctx.fillStyle = "#666699";
        ctx.arc(x, y, 20, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
    };
      
         
    var clearGate = function() {
        //clears the rectangular/square "gate" around the ball
        ctx.fillStyle="white";
        ctx.beginPath();
        ctx.fillRect(71, 75, 61, 61);
        ctx.stroke();
    };
         
    var drawArray = function() {
        console.log(inputsArray)
    };
         
//    var testFunc = function() {
//        if (leftDir == true && downDir == true) {
//        ctx.fillText("diag, yo!" 200, 200);
//    };    
//    };
         
         
      
    drawstick();
      
    balltop(101, 105);
      
      
     }
    
        document.addEventListener('keydown', function(event) {
            
            //right or num6 or d draws the balltop to the left of original position 
            
            
        if(event.keyCode == 39 || event.keyCode == 68 || event.keyCode == 102) { 
            var rightDir = true;
            inputsArray.push(">");
            drawArray();
            ctx.moveTo(101,105);
            ctx.lineTo(141,105);
            ctx.stroke();
            clearGate();
            
            balltop(109, 105);
        }
         
            // left or num4 or a
            
               
        if(event.keyCode == 37 || event.keyCode == 65 || event.keyCode == 100) {
            var leftDir = true;
            inputsArray.push("<");
            drawArray();
            ctx.beginPath();
            ctx.moveTo(101,105);
            ctx.lineTo(60,105);
            ctx.stroke();
            clearGate();
            balltop(93, 105);           
                
        }
            
            
            //up or num8 or w
        if(event.keyCode == 38 || event.keyCode == 87 || event.keyCode == 104) {
            var upDir = true;
            inputsArray.push("^");
            drawArray();
            ctx.moveTo(101,105);
            ctx.lineTo(101,65);
            ctx.stroke();
            clearGate();
            balltop(101, 97);
        }
            //down or s or num2
        if(event.keyCode == 40 || event.keyCode == 83 || event.keyCode == 98) { 
            var downDir = true;
            inputsArray.push("v");
            drawArray();
            ctx.moveTo(101,105);
            ctx.lineTo(101,145);
            ctx.stroke();
            clearGate();
            balltop(101, 115);
        }
            //z or p
        if(event.keyCode == 90 || event.keyCode == 80) { 
            var punch = true;
            inputsArray.push("P");
            drawArray();
            buttonDown(193, 95);
            //run a function that checks if to triger special move
           
        }
            
//diagonals for numpad, upleft num7
        if(event.keyCode == 103) { 
            var ulDir = true;
            inputsArray.push("ul");
            drawArray();
            ctx.moveTo(101,105);
            ctx.lineTo(64,68);
            ctx.stroke();
            clearGate();
            balltop(92, 97);
        }
            
//upright num9
       if(event.keyCode == 105) { 
            var urDir = true;
            inputsArray.push("ur");
            drawArray();
            ctx.moveTo(101,105);
            ctx.lineTo(138,68);
            ctx.stroke();
            clearGate();
            balltop(112, 97);
        };
            
    //downright num3        
        if(event.keyCode == 99) { 
            var drDir = true;
            inputsArray.push("dr");
            drawArray();
            ctx.moveTo(101,105);
            ctx.lineTo(138,141);
            ctx.stroke();
            clearGate();
            balltop(111, 115);
        }
            
            //downleft num1        
        if(event.keyCode == 97) { 
            var dlDir = true;
            inputsArray.push("dl");
            drawArray();
            ctx.moveTo(101,105);
            ctx.lineTo(65,142);
            ctx.stroke();
            clearGate();
            balltop(91, 115);
        };


    });
    
    
    
         
    document.addEventListener('keyup', function(event) { 
        if(event.keyCode == 90 || event.keyCode == 80) { 
            var punch = false;
            drawstick();
        }

        //if left or
        //right or
        //up or
        //down
        //draw ball at neutral
        if(event.keyCode == 37 || event.keyCode == 65 || event.keyCode == 100) {
            var leftDir = false;
            clearGate();
            balltop(101, 105);   
           }
        if(event.keyCode == 39 || event.keyCode == 68 || event.keyCode == 102) {
            var rightDir = false;
            clearGate();
            balltop(101, 105);   
           }
        if(event.keyCode == 38 || event.keyCode == 87 || event.keyCode == 104) {
            var upDir = false;
            clearGate();
            balltop(101, 105);   
           }
        if(event.keyCode == 40 || event.keyCode == 83 || event.keyCode == 98) {
            var downDir = false;
            clearGate();
            balltop(101, 105);   
           
        };
        
        if(event.keyCode == 97) { 
        
            var dlDir = false;
            clearGate();
            balltop(101, 105);
        }
        if(event.keyCode == 99) { 
    
            var drDir = false;
            clearGate();
            balltop(101, 105);
        }
        
        if(event.keyCode == 103) { 
        
            var ulDir = false;
            clearGate();
            balltop(101, 105);
        }
        if(event.keyCode == 105) { 
    
            var urDir = false;
            clearGate();
            balltop(101, 105);
        }
    });
    

    
//    
//    if (leftDir == true && downDir == true) {
//        ctx.fillText("diag, yo!" 200, 200);
//    };
    

//    
//    window.addEventListener("gamepadconnected", function(e) {
//  console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
//  e.gamepad.index, e.gamepad.id,
//  e.gamepad.buttons.length, e.gamepad.axes.length);
//};
 
};
