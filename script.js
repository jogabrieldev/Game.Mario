
const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const restar = document.querySelector(".restart");
const clouds = document.querySelector(".clouds");

const gameOverText = document.createElement("div");

gameOverText.innerText = "Game Over"; 
gameOverText.classList.add("game-over-text");  
document.body.appendChild(gameOverText); 

const showGameOver = () => {
  
  gameOverText.style.display = "block"; 
};

const jump = () => {
  
  mario.classList.add("jump"); 

  setTimeout(() => {
    mario.classList.remove("jump"); 
  }, 500);
};

const stopClouds = () => {
  clouds.style.animation = "none";
};

const loop = setInterval(() => {
  
  const pipePosition = pipe.offsetLeft; 

  const marioPosition = +window 
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`; 

    mario.style.animation = "none"; 
    mario.style.bottom = `${marioPosition}px`; 

    mario.src = "./img/game-over.png"; 
    mario.style.width = "160px"; 
    mario.style.marginLeft = "23px"; 

    clearInterval(loop); 
    stopClouds(); 
    showGameOver(); 
  }
}, 10);

restar.addEventListener("click", () => {
  
  location.reload(true);
});


document.addEventListener("keydown", jump);  
document.querySelector(".restart").addEventListener("click", (event)=> {

})
; 
