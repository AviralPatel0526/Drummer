
var arr=document.querySelectorAll("button");
for(var i=0;i<arr.length;i++){
arr[i].addEventListener("click",function (){
    var buttonInnerHtml=this.innerHTML;
   makesound(buttonInnerHtml);
   buttonAnimation(buttonInnerHtml);
});
}

document.addEventListener("keydown", function(event){
   makesound(event.key);
   buttonAnimation(event.key);
})

function makesound(key){
    switch (key) {
        case "w":
            var audio= new Audio("./tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio= new Audio("./tom-2.mp3");
            audio.play();
            break;
            case "s":
            var audio= new Audio("./tom-3.mp3");
            audio.play();
            break;
            case "d":
            var audio= new Audio("./tom-4.mp3");
            audio.play();
            break;
            case "j":
            var audio= new Audio("./crash.mp3");
            audio.play();
            break;
            case "k":
            var audio= new Audio("./snare.mp3");
            audio.play();
            break;  
            case "l":
            var audio= new Audio("./kick-bass.mp3");
            audio.play();
            break; 
        default:
            alert("wrong button clicked!");
            break;
    }   
}

function buttonAnimation(currentkey){
 var activeButton=document.querySelector("."+currentkey);
 activeButton.classList.add("pressed");
 setTimeout(function() {
    activeButton.classList.remove("pressed");
 } )
}