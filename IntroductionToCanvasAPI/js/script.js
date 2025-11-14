
const canvas = document.getElementById("my-canvas");
const ctx =  canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;

ctx.font = "30px Arial";

ctx.fillStyle = "crimson";

ctx.fillRect(1, 1, 150, 100);


const textCanvas = document.getElementById("my-text-canvas");

const textCanvasCtx = textCanvas.getContext("2d");

// Set font family and size
textCanvasCtx.font = "30px Arial";

// Set text color
textCanvasCtx.fillStyle = "crimson";

// Draw the text
textCanvasCtx.fillText("Hello HTML Canvas!", 1, 50);
