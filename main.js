canvas=document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

background_image="mars.jpg";
rover_image="rover.png";

rover_width = 100;
rover_height = 100;

rover_x_postion =10;
rover_y_postion =10;

function add() {
background_imageTag = new Image();
background_imageTag.onload = uploadbackground;
background_imageTag.src =background_image;

rover_imageTag = new Image();
rover_imageTag.onload = uploadrover;
rover_imageTag.src =rover_image;
}

function uploadbackground(){
ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);
}

function uploadrover(){
ctx.drawImage(rover_imageTag,rover_x_postion,rover_y_postion,rover_width,rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(){

    keyPressed = e.keycode;
    console.log(keyPressed);
            if(keyPressed == '38')

{
up();
console.log("up");

}
  
if(keyPressed == '40')

{
down();
console.log("down");

}

if(keyPressed == '37')

{
left();
console.log("left");

}
if(keyPressed == '39')

{
right();
console.log("right");

}
}
function up(){
if(rover_y_postion >=0)
{
rover_y_postion = rover_y_postion - 10;
console.log("when up arrow is pressed, x ="+ rover_x_postion +"y =" +rover_y_postion);
uploadbackground();
uploadrover();
}
}
function down(){
    if(rover_y_postion <=500)
    {
    rover_y_postion = rover_y_postion + 10;
    console.log("when down arrow is pressed, x ="+ rover_x_postion +"y =" +rover_y_postion);
    uploadbackground();
    uploadrover();
    }
    }
    function right(){
        if(rover_x_postion <=700)
        {
        rover_x_postion = rover_x_postion + 10;
        console.log("when right arrow is pressed, x ="+ rover_x_postion +"y =" +rover_y_postion);
        uploadbackground();
        uploadrover();
        }
        }
 function left(){
 if(rover_x_postion >=0)
 {
  rover_x_postion = rover_x_postion - 10;
  console.log("when left arrow is pressed, x ="+ rover_x_postion +"y =" +rover_y_postion);
uploadbackground();
            uploadrover();
            }
            }