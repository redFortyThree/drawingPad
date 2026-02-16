const draw = document.getElementById("draw");

for (i = 0; i <= 255; i++) {
 let nexBox = document.createElement('div');
 nexBox.id = "box" + i;
 nexBox.className = 'pixel';
 draw.appendChild(nexBox);
}