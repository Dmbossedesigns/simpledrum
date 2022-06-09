

var drumclass = document.querySelectorAll(".drums");
for (var i = 0; i < drumclass.length; i++) {
    var event = drumclass[i].addEventListener("click", function () {
        var btnclass = this.innerHTML.toLowerCase();
        choseSong(btnclass)
        keyAnimation(btnclass)
    })
}

document.addEventListener("keypress", function (e) {
    var key = e.key
    choseSong(key)
    keyAnimation(key)
})






function choseSong(name) {
    switch (name) {
        case "a":
            playSound(name)
            break;
        case "a":
            playSound(name)
            break;
        case "j":
            playSound(name)
            break;
        case "k":
            playSound(name)
            break;
        case "l":
            playSound(name)
            break;
        case "o":
            playSound(name)
            break;
        case "s":
            playSound(name)
            break;
        case "w":
            playSound(name)
            break;
        default: name
            break;
    }
}

function playSound(songname) {
    var song = new Audio("../sound/" + songname + ".wav")
    song.play()
}


function keyAnimation(name) {
    var ks = document.querySelector("." + name)
    ks.classList.add("anime")

    setTimeout(() => {
        ks.classList.remove("anime")
    }, 100);

}