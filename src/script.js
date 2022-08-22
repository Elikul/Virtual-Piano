const keys = ["a", "s", "d", "f", "g", "h", "j", "w", "e", "t", "y", "u"]

document.addEventListener("keydown", function (event) {
    let isRightKey = keys.map(key => {
        if(event.key.includes(key)){
            const audio = new Audio(`assets/keys_sound/${event.key.toUpperCase()}.mp3`)
            audio.play();
            return true;
        }
        return false;
    })
    if(!isRightKey.includes(true)){
        console.warn("another key pressed");
    }
})