canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
car_array=["https://i.postimg.cc/bv5d35nK/racing.jpg"];
random_number=Math.floor(Math.random()*4);
rover_width=100;rover_height=90;
rover_x=10;
rover_y=10;
background_image=nasa_array[random_number];
car_image="https://i.postimg.cc/YqdnnNX1/car1.png";
function add(){
    background=new Image();
    background.onload=uploadbackground;
    background.src=background_image;
    rover=new Image();
    rover.onload=uploadrover;
    rover.src=car_image;
}
function uploadbackground(){
    ctx.drawImage(background,0,0,canvas.width,canvas.width);

}
function uploadrover(){
    ctx.drawImage(rover,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e) { keyPressed = e.keyCode; 
console.log(keyPressed);
if(keyPressed == '38') { up();
console.log("up");
}
 if(keyPressed == '40') { down();
console.log("down");
}
  if(keyPressed == '37') { left(); 
console.log("left");
} 
if(keyPressed == '39') { right();
console.log("right"); } 
}
function up() { if(rover_y >=0) { rover_y = rover_y - 10;
 console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
 uploadbackground(); uploadrover(); }
     }
 function down() { if(rover_y <=500) { rover_y = rover_y + 10;
 console.log("When down arrow is pressed, x = " + rover_x + " | y = " +rover_y);
uploadbackground(); uploadrover(); }
            }
function left() { if(rover_x >= 0) { rover_x =rover_x - 10;
 console.log("When left arrow is pressed, x = " + rover_x + " | y = " +rover_y);
 uploadbackground(); uploadrover();
 } 
}
 function right() { if(rover_x <= 700) { rover_x =rover_x + 10;
 console.log("When right arrow is pressed, x = " + rover_x + " | y = " +rover_y);
 uploadbackground(); uploadrover();}
 }