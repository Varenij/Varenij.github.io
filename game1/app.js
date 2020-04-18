let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

let bird = new Image();
let bg = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();

bird.src = "bied.png";
bg.src = "fild.png";
fg.src = "ground.png";
pipeUp.src = "pipe1.png";
pipeBottom.src = "pipe2.png";

let fly = new Audio();
let scoreAdd = new Audio();
let faild = new Audio();

fly.src = "fly.mp3";
scoreAdd.src = "score.mp3";
faild.src = "faild.mp3";

let gap = 90;

document.addEventListener("keydown", moveUp);

function moveUp () {
    yPos -= 40  ;
    fly.play();
}

let pipe = [];

pipe[0] = {
    x: cvs.width,
    y: 0,
}

let xPos = 10;
let yPos = 150;
let grav = 0.8;
let score = 0;


function draw () {
    ctx.drawImage(bg, 0, 0);

    for (let i = 0; i < pipe.length; i++) {
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);

        pipe[i].x--;

        if(pipe[i].x==50) {
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height 
            });
        }

        if (xPos + bird.width >= pipe[i].x 
            && xPos <= pipe[i].x + pipeUp.width 
            && (yPos <= pipe[i].y + pipeUp.height 
                || yPos + bird.height >= pipe[i].y + pipeUp.height + 
                gap) || yPos + bird.height >= cvs.height - fg.height) {
                    location.reload();
                };    
                
        if(pipe[i].x == 5) {
            score++;
            scoreAdd.play()
    };
}

    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird, xPos, yPos);

    yPos += grav;
    ctx.fillStyle = "#000";
    ctx.font = "24px Verdana";
    ctx.fillText ("Score: " + score, 10, cvs.height - 20)
    requestAnimationFrame(draw);

}
 
pipeBottom.onload = draw;