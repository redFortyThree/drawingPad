const draw = document.getElementById("draw");

for (i = 0; i <= 255; i++) {
 let nexBox = document.createElement('div');
 nexBox.id = "box";
 nexBox.className = 'pixel';
 draw.appendChild(nexBox);

 function changeColor() {
    nexBox.style.backgroundColor = "black";

}

nexBox.addEventListener('pointerenter', changeColor);
}

