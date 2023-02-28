window.addEventListener("keydown",(e)=>{
    var audio= document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // console.log(audio);
    var key=document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(audio){
        audio.play();
        audio.currentTime=0;
        key.classList.add("playing");
    }
    return;
})

var kk=document.querySelectorAll(".key")
kk.forEach((e)=>{
    e.addEventListener('transitionend', remove)
})

function remove(k){
    if(k.propertyName="transition"){
        this.classList.remove("playing")
    }
    return;
}