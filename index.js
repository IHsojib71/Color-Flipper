const colors =["Green","Red","Blue","Cyan","White","Gray","Orange","Maroon","Yellow","Purple"];
const btn =document.getElementById("btn");
const color = document.querySelector('.color');

btn.addEventListener('click',function(){
    //get random number between o-3 colors[]
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}