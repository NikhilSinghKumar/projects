window.addEventListener('keydown', playingSound)
function playingSound(e){
    // console.log(e)
    // console.log(e.keyCode);
    const audio= document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key= document.querySelector(`div[data-key="${e.keyCode}"]`)
    // console.log(key);
    // key.add('playing');
    key.classList.add('playing');

    // setTimeout(() => {
        
    // }, 0.07);

    if(!audio) return;
    audio.currentTime=0;
    audio.play();
}

const keys =document.querySelectorAll('.key');
// console.log(keys)

keys.forEach(function(key){
    key.addEventListener('transitionend', remove)
})

function remove(e){
    // console.log(e);
    if(e.propertyName !== "transform") return;
    console.log(this);
    this.classList.remove('playing');
}