canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var last_position_x;
var last_position_y;
var color = "black";
var width = 1;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){

color = document.getElementById("color").value;
width = document.getElementById("width").value;
mouseEvent = "mousedown";

}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){

mouseEvent = "mouseleave";

}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){

mouseEvent = "mouseup";

}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){

    current_position_x = e.clientX - canvas.offsetLeft;
    current_position_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;

        console.log("last position of x and y coordnates = ");
        console.log("x = "+last_position_x+" y = "+last_position_y);
        ctx.moveTo(last_position_x,last_position_y);

        console.log("Current position of x and y coordnates = ");
        console.log("x = "+current_position_x+" y = "+ current_position_y);
        ctx.lineTo(current_position_x,current_position_y);
        ctx.stroke();
        }

        last_position_x = current_position_x;
        last_position_y = current_position_y;

}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}