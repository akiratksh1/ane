const colors = ["#DDA0DD", "#8B008B", "#FFA07A", "#FF00FF", "#FF1493", "#7B68EE", "9370DB", "#FF69B4", "#DA70D6"];
let colorIndex = 0;

setInterval(() => {
  const body = document.querySelector("body");
  const title = document.querySelector(".title");
  body.style.backgroundColor = colors[colorIndex];
  title.style.color = colors[colors.length - colorIndex - 1];
  colorIndex = (colorIndex + 1) % colors.length;
}, 1000);
