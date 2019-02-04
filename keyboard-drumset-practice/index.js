const ourKeys = ["65", "83", "68", "70", "71", "72", "74", "75", "76"]

window.addEventListener('keydown', function(e){
    if(!ourKeys.includes(e.keyCode.toString())) return;
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    key.classList.add("playing")

    //Play audio
    let sound = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    sound.currentTime = 0;
    sound.play();
})

let keys = document.querySelectorAll('.key')

keys.forEach(val => {
    val.addEventListener("transitionend", function(e){
        if(e.propertyName === "transform"){
            this.classList.remove("playing")
        }
    })
})