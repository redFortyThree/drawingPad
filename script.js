const draw = document.getElementById("draw");
const drawingWidth = draw.style.width = "320px";
let wide = 16
let loopEnd = wide * wide;


for (i = 1; i <= loopEnd; i++) {
 let nexBox = document.createElement('div');
 nexBox.id = "box";
 nexBox.className = 'pixel';
 nexBoxWide = nexBox.style.width = "20px";
 nexBoxHigh = nexBox.style.height = "20px";
 draw.appendChild(nexBox);

 function changeColor() {
    nexBox.style.backgroundColor = "black";

}

nexBox.addEventListener('pointerenter', changeColor);
}

const resizerButton = document.getElementById('btn');
function resize() {
   draw.innerHTML = '';
    wide = Number(prompt("how many pixels should be in the box? enter a number..e.g. '100'"));
   loopEnd = wide * wide;
draw.style.width = "320px";
   for (i = 1; i <= loopEnd; i++) {
 let nexBox = document.createElement('div');
 nexBox.id = "box";
 nexBox.className = 'pixel';
 newWidth = 320/wide;
 
 nexBox.style.width = newWidth + "px";
 nexBox.style.height = newWidth + "px";

 draw.appendChild(nexBox);

 function changeColor() {
    nexBox.style.backgroundColor = "black";

}

nexBox.addEventListener('pointerenter', changeColor);
}

}
resizerButton.addEventListener("click",resize)

