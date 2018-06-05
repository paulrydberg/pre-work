document.getElementById("growBtn").addEventListener("click", function(){

    document.getElementById("box").style.height = "250px";
    document.getElementById("box").style.width = "250px";

});

document.getElementById("blueBtn").addEventListener("click", function(){
    
    document.getElementById("box").style.backgroundColor = "blue";
    document.getElementById("box").style.opacity = "1";

});

    document.getElementById("fadeBtn").addEventListener("click", function(){
    document.getElementById("box").style.opacity = "0.25";

});

document.getElementById("resetBtn").addEventListener("click", function(){

    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "1";

});




/////////////////////////////////////////////////////////////////////////////////////////////////

growfunction1 = document.getElementById("box").style.height = "250px";
growfunction2 = document.getElementById("box").style.width = "250px";
growfunction = growfunction1 and growfunction2


document.getElementById("growBtn").addEventListener("click", function(){

    object.addEventListener("click", growfunction);

});

function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
 }


 object.addEventListener("click", growfunction);