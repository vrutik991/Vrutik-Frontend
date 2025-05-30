// const dot = document.querySelector(".cursor-dot");
// const ring = document.querySelector(".cursor-ring");

// document.addEventListener("mousemove", e => {
//   const { clientX: x, clientY: y } = e;

//   dot.style.left = `${x}px`;
//   dot.style.top = `${y}px`;

//   ring.style.left = `${x}px`;
//   ring.style.top = `${y}px`;
// });


const dot = document.querySelector(".cursor-dot");
const ring = document.querySelector(".cursor-ring");

let mouseX = 0;
let mouseY = 0;
let ringX = 0;
let ringY = 0;

document.addEventListener("mousemove", e => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  // dot follows instantly
  dot.style.left = `${mouseX}px`;
  dot.style.top = `${mouseY}px`;
});

function animateRing() {
  // Lerp (easing)
  ringX += (mouseX - ringX) * 0.1;
  ringY += (mouseY - ringY) * 0.1;

  ring.style.left = `${ringX}px`;
  ring.style.top = `${ringY}px`;

  requestAnimationFrame(animateRing);
}

animateRing(); // Start animation loop
