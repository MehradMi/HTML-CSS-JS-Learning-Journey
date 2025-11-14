
const square = document.querySelector("#square");
const playBtn = document.querySelector("#playBtn");
const pauseBtn = document.querySelector("#pauseBtn");

const animation = square.animate(
  [{ transform: "translateX(0px)" }, { transform: "translateX(200px)" }],
  {
    duration: 5000, // Animation lasts 5 seconds
    // iterations: Infinity, // Loops indefinitely
    direction: "alternate", // Moves back and forth
    easing: "ease-in-out" // Smooth easing function
  }
);

animation.onfinish = () => {
    console.log("Animation Finished!");
};

playBtn.addEventListener("click", () => {
    animation.play();
    console.log("You Started The Animation");
});

pauseBtn.addEventListener("click", () => {
    animation.pause();
    console.log("You Paused The Animation!");
});

