let passcode = "147supertfOGRE";
let userInput;

var audio = new Audio("LOUDINCORRECTBUZZER.mp3");

document.getElementById("mySubmit").onclick = function(){
    userInput = document.getElementById("myText").value;
    if (userInput == passcode){
        console.log("Correct!");
        window.location.assign("pageMystery.html"); 
    }
    else{
        console.log("Wrong!"); 
        audio.play();
    }
}

