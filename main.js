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

