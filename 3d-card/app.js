// Movement Animation  
const card = document.querySelector('.card');
const container = document.querySelector('.container');
const sneaker = document.querySelector('.sneaker img');
const title = document.querySelector('.title');
const sizes = document.querySelector('.sizes');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const circle = document.querySelector('.circle');


// Card Animation 3d
container.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth/2 - e.pageX) / 25;
  let yAxis = (window.innerHeight/2 - e.pageY) / 25;
  card.style.transform = (`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`);
}); 

// Card Animation In
container.addEventListener('mouseenter', (e) => {
  card.style.transition = "none";
  title.style.transform = "translateZ(130px)";
  sneaker.style.transform = "translateZ(150px) rotateZ(-45deg)";
  sizes.style.transform = "translateZ(110px)";
  purchase.style.transform = "translateZ(120px)";
  description.style.transform = "translateZ(100px)";
  circle.style.transform = "translateZ(50px)";
});

// Card Animation out
container.addEventListener('mouseleave', (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = ('rotateY(0deg) rotateX(0deg)');
  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";
  circle.style.transform = "translateZ(0px)";
});

