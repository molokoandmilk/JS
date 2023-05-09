const itemEl = document.querySelector('.item')
const placeholdersEl = document.querySelectorAll('.placeholder')

itemEl.addEventListener('dragstart',dragstart)
itemEl.addEventListener('dragend', dragend)

for(const placeholder of placeholdersEl){
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave',dragleave)
    placeholder.addEventListener('drop',dragdrop)

}

function dragstart(event){
    event.target.classList.add('hold')
    setTimeout(()=>
        event.target.classList.add('hide'),0
    )
    

}
function dragend(event){
    event.target.classList.remove('hold', 'hide')
}


function dragover(event){
    event.preventDefault()
}
function dragenter(event){
    event.target.classList.add('hovered')
    
}
function dragleave(event){
    event.target.classList.remove('hovered')
}
function dragdrop(event){
    event.target.classList.remove('hovered')
    event.target.append(itemEl)
}
