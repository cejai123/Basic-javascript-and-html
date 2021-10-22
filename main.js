const increaser = document.getElementById("btn");
const counter = document.getElementById("count")
const decreaser = document.getElementById("btn1")
const reset = document.getElementById("btnreset")

let count = 0

reset.addEventListener("click", function() {
    counter.innerHTML = count = 0;
});

increaser.addEventListener("click", function(){
    counter.innerHTML = count += 1;
});

decreaser.addEventListener("click", function() {
    counter.innerHTML = count -= 1;
});

const dateinp = document.getElementById("date")
function time(){
    
    var today = new Date();
    var date = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();
    dateinp.innerHTML = date;
}

window.onload = time();

