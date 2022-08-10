const button = document.querySelector('.button');
const circle = document.querySelector('.circle');

button.addEventListener('click', (e) => {
    let x = e.pageX;
    let y = e.pageY;
    const widthButton = parseInt(getComputedStyle(button).width.substring(0, getComputedStyle(button).width.length - 2)) 
                     + parseInt(getComputedStyle(button).padding.substring(0, getComputedStyle(button).padding.length - 2 ));
    const heightButton = parseInt(getComputedStyle(button).height.substring(0, getComputedStyle(button).height.length - 2)) 
                     + parseInt(getComputedStyle(button).padding.substring(0, getComputedStyle(button).padding.length - 2 ));
    const buttonStartPosLeft = ( window.innerWidth / 2 - widthButton / 2);
    const buttonStartPosTop = (window.innerHeight / 2 - heightButton / 2);
    
    circle.style.left = ( ( x - buttonStartPosLeft ) * 100 / widthButton ) + "%";
    circle.style.top = ( ( y - buttonStartPosTop ) * 100 / heightButton ) + "%";
    circle.style.display = "block";
    setTimeout(() => {
        circle.style.display = "none";
    }, 500);
});