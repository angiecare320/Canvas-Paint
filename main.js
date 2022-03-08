
var lastPOSX, lastPOSY;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "purple";
width_of_line = 5;
 
canvas.addEventListener("mouseleave", my_mouseleave)
function my_mouseleave(e){
mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseUP", my_mouseUP)
function my_mouseUP(e){
mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseDown", my_mouseDown)
function my_mouseDown(e){
mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseMove", my_mouseMove)
function my_mouseMove(e)
{
    current_postion_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_postion_of_mouse_y = e.clientX - canvas.offsetTop;

    if(mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.lineWidth = width_of_line;
        ctx.strokeStyle = color;
        
        console.log("last_postion_of_X_and_Y_co-ordanites =");
        console.log("X = "+lastPOSX+"Y = "+lastPOSY);
        ctx.moveTo(lastPOSX, lastPOSY);

        console.log("current_postion_of_X_and_Y_co-ordanites =");
        console.log("X = "+current_postion_of_mouse_x+"Y = "+current_postion_of_mouse_y);
        ctx.lineTo(current_postion_of_mouse_x, current_postion_of_mouse_y);
        ctx.stroke();
   
    }
    lastPOSX = current_postion_of_mouse_x;
    lastPOSY = current_postion_of_mouse_y;
}