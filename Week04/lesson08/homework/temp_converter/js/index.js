
// store number in input number to javascript
// onclick convert button log number in result as farenheit
document.getElementById('clear').onclick = clearNumbers;


function convert(degree) {
    if (degree === "C") {
        F = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = Math.round(F);
    } else {
        C = (document.getElementById("f").value -32) * 5 / 9;
        document.getElementById("c").value = Math.round(C);
    }
}


//Do stuff
