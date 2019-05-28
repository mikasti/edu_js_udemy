/*
//Ответ: 0
function MyObj(){
    this.v = 0;
}
var a = new MyObj;
alert(a.v);
//
let n = 5.0;*/

function clicked (){
    console.log(this);
    alert(this.innerHTML);
}
var rocket = function(){
    this.name = "Proton";
    this.launch = function(){
        alert(this.name + " has lift!");    };
};
var launchBtn = document.getElementById("launch");
launchBtn.addEventListener("click", function(){});