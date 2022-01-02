
var drumCount = document.querySelectorAll('.drum').length

for(var i =0;i<drumCount;i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',function(){
        soundSwitch(this.textContent);  
        drumAnimation(this.textContent);      
    });
}

document.addEventListener('keydown',function(e){
    soundSwitch(e.key);
    drumAnimation(e.key);
});

var soundSwitch = function(key){
    switch (key) {
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
            
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;

        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;

        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;

        case 'j':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;

        case 'k':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;

        case 'l':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
    
    
        default:
            console.log(key);
    }
}

var drumAnimation = function(currentKey){
    if(currentKey === 'w'||
        currentKey === 'a'||
        currentKey === 's'||
        currentKey === 'd'||
        currentKey === 'j'||
        currentKey === 'k'||
        currentKey === 'l'){
        var activeDrum = document.querySelector("." + currentKey);
        activeDrum.classList.add('pressed');
        setTimeout(function(){
            activeDrum.classList.remove('pressed');
        },100)
    }
}
