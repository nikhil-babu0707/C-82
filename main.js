var mouseEvents = "empty";
var last_X, last_Y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
widthLine = 1;
canvas.addEventListener("mousedown", my_mouse_down);

function my_mouse_down(e) {
    mouseEvents = "mouseDown";
}
canvas.addEventListener("mouseleave", my_mouse_leave);

function my_mouse_leave(e) {
    mouseEvents = "mouseleave";
}
canvas.addEventListener("mouseup", my_mouse_up);

function my_mouse_up(e) {
    mouseEvents = "mouseUP";
}
canvas.addEventListener("mousemove", my_mouse_move);

function my_mouse_move(e) {
    current_X = e.clientX - canvas.offsetLeft;
    current_Y = e.clientY - canvas.offsetTop;
    if (mouseEvents == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthLine;
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_X + "y = " + last_Y);
        ctx.moveTo(last_X, last_Y);
        console.log("current position of x and y coordinates = ");
        console.log("x = " + current_X + "y = " + current_Y);
        ctx.moveTo(current_X, current_Y);
        ctx.stroke();
    }
    last_X = current_X;
    last_Y = current_Y;
}