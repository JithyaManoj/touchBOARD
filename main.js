 canvas=document.getElementById("myCanvas");

 pen=canvas.getContext("2d");
 color="white";
 last_touch_x=""; 
 last_touch_y="";
 line_width=9;

 new_canvaswidth=screen.width-70;
 new_canvaheight=screen.height-300;

 if (screen.width<992) {
     canvas.width=new_canvaswidth;
     canvas.height=new_canvasheight;
     document.body.style.overflow="hidden";
 }

canvas.addEventListener("touchstart",Navya_touchstart);

function Navya_touchstart(){
    last_touch_x=e.touches[0].clientX-canvas.offsetLeft;
    last_touch_y=e.touches[0].clientY-canvas.offsetTop;
}


canvas.addEventListener("touchmove",N_touchmove);

function N_touchmove(e){
    current_touch_x=e.touches[0].clientX-canvas.offsetLeft;
    current_touch_y=e.touches[0].clientY-canvas.offsetTop;

        pen.beginPath();
        pen.strokeStyle=color;                                  
        pen.lineWidth=line_width;
        console.log("last position of x and y coordinates are");
        console.log("x="+last_touch_x+ "y="+last_touch_y);
        pen.moveTo(last_touch_x,last_touch_y);
        pen.lineTo(current_touch_x,current_touch_y);
        console.log("current position of x and y coordinates are");
        console.log("x="+current_touch_x+ "y="+current_touch_y);
        pen.stroke();

    last_touch_x=current_touch_x;
    last_touch_y=current_touch_y;

}


 function erase(){
     pen.clearRect(0,0,canvas.width,canvas.height);

 }