let canvas = document.getElementById("boomCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(100,100,30,0, Math.PI *2);
ctx.fill();



document.addEventListener("click", (event)=>{
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(100,100,30,0, Math.PI *2);
    ctx.fill();
})