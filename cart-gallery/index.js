const slidesEl = document.querySelectorAll('.slide')

for(const slide of slidesEl){
    slide.addEventListener('click', () => {
        clearActiveClasses()

        slide.classList.add('active')
    })
}
function clearActiveClasses(){
    slidesEl.forEach((slide)=>{
        slide.classList.remove('active')

    })

}