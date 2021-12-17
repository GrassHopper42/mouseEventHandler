const body = document.querySelector("body");

const mouseClickHandler = event => {
  let emojis = [0x1F600, 0x1F604, 0x1F34A, 0x1F344, 0x1F37F, 0x1F363, 0x1F370, 0x1F355,
    0x1F354, 0x1F35F, 0x1F6C0, 0x1F48E, 0x1F5FA, 0x23F0, 0x1F579, 0x1F4DA,
    0x1F431, 0x1F42A, 0x1F439, 0x1F424];
  const popContainer = document.createElement("div");
  popContainer.className = "popContainer";
  body.appendChild(popContainer);
  popContainer.style.top = `${event.clientY-50}px`;
  popContainer.style.left = `${event.clientX-50}px`;
  const pop = document.createElement("div");
  pop.className = "pop";
  popContainer.appendChild(pop);
  const rand = () => {
    let randomKey = Math.random() * (emojis.length - 1);
    return Math.floor(randomKey);
  }
  pop.innerText = String.fromCodePoint(emojis[rand()]);
  setTimeout(() => body.removeChild(popContainer), 250);
}

const mouseMoveHandler = event => {
  const circle = document.createElement("div");
  circle.className = "circle";
  body.appendChild(circle);
  circle.style.top = `${event.clientY-25}px`;
  circle.style.left = `${event.clientX-25}px`;
  setTimeout(() => body.removeChild(circle), 300);
}

setInterval(() => {
  body.addEventListener("mousemove", mouseMoveHandler);
}, 0.001); 
body.addEventListener("click", mouseClickHandler);