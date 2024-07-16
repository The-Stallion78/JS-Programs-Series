                        // Forms API
let button = document.getElementById("btn1");
let text;
button.addEventListener("click", function () {
    let input = document.getElementById("num");
    if (input.validity.rangeOverflow) {
        text = "The value is too high";
    } else {
        text = "Number in Range";
    }
    document.getElementById("Demo").innerHTML = text;

})




