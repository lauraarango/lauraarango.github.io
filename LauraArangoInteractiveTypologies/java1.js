const section = document.querySelector ('section');
const portrait1 = document.querySelector ('.portrait1');
const FPS = 60;

section.style.height = window.innerHeight + 'px';
section.style.width = window.innerWidth +'px';

//portrait1 moving velocity Variables
let xPosition = 10;
let yPosition = 10;
let xSpeed = 4;
let ySpeed = 4;


function update(){
	portrait1.style.left = xPosition + 'px';
	portrait1.style.top = yPosition + 'px';
}

setInterval(()=>{
if(xPosition + portrait1.clientWidth >= window.innerWidth || xPosition <= 0){
	xSpeed = -xSpeed;
}

if(yPosition + portrait1.clientHeight >= window.innerHeight || yPosition <= 0){
	ySpeed = -ySpeed;
}
xPosition += xSpeed;
yPosition += ySpeed;
update();
},1000/FPS)
