const board = document.querySelector('#board');
const colors = ['#F08080','#E9967A', '#FF69B4', '#C71585', '#FF7F50', '#FFFF00']
const SQURES_NUMBER = 400;

for(let i= 0; i<SQURES_NUMBER; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', ()=>{
        setColor(square)
    })
    square.addEventListener('mouseleave', ()=>{
        removeColor(square)
    })
    board.append(square);

}

function setColor(elem){
    const color  = getColor()
    elem.style.backgroundColor = color
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color} `
}

function removeColor(elem){
    elem.style.backgroundColor = '#1d1d1d'
    elem.style.boxShadow = `0 0 2px black`
}

function getColor(){
 const index = Math.floor(Math.random() * colors.length);
 return colors[index]
}