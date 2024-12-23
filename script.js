const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const clear = document.querySelector(".clear");
const lineSize = document.querySelector(".size");
const decrease = document.querySelector(".decrease");
const increase = document.querySelector(".increase");
const color = document.getElementById("color");

let isPressed = false;
let size = 20;
let fillColor = "black";
let x;
let y;

const drawCircle = (x, y) => {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = fillColor;
  ctx.fill();
};

const drawLine = (x1, y1, x2, y2) => {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = fillColor;
  ctx.lineWidth = size * 2;
  ctx.stroke();
};

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", () => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

clear.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

decrease.addEventListener("click", () => {
  size -= 5;
  lineSize.innerText = size;
});

increase.addEventListener("click", () => {
  size += 5;
  lineSize.innerText = size;
});

color.addEventListener("change", (e) => {
  fillColor = e.target.value;
});
