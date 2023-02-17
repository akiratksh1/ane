function changeColor() {
    var colors = ['#FFC0CB', '#FFB6C1', '#FF69B4', '#FF1493', '#C71585'];
    var body = document.body;
    var currentColor = body.style.backgroundColor;
    var newColor = colors[Math.floor(Math.random() * colors.length)];
    
    while (newColor === currentColor) {
      newColor = colors[Math.floor(Math.random() * colors.length)];
    }
    
    body.style.backgroundColor = newColor;
  }
  
  setInterval(changeColor, 3000);
  