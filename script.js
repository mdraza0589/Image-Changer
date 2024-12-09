let firstImage = document.getElementById('first-image');
let secondImage = document.getElementById('second-image');
let thirdImage = document.getElementById('third-image');

let circle1 = document.getElementById('circle1')
let circle2 = document.getElementById('circle2')
let circle3 = document.getElementById('circle3')

let body =document.getElementById('body');

function first(){
    firstImage.style.opacity='1'
    secondImage.style.opacity='0'
    thirdImage.style.opacity='0'

    circle1.style.backgroundColor='white'
    circle2.style.backgroundColor='grey'
    circle3.style.backgroundColor='grey'

    body.style.background = 'blue'
    
}
function second(){
    firstImage.style.opacity='0'
    secondImage.style.opacity='1'
    thirdImage.style.opacity='0'
    
    circle1.style.backgroundColor='grey'
    circle2.style.backgroundColor='white'
    circle3.style.backgroundColor='grey'

    body.style.background = 'lightgreen'
}
function third(){
    firstImage.style.opacity='0'
    secondImage.style.opacity='0'
    thirdImage.style.opacity='1'
    
    circle1.style.backgroundColor='grey'
    circle2.style.backgroundColor='grey'
    circle3.style.backgroundColor='white'

    body.style.background = 'yellow'
}
 