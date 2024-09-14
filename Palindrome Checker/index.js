const input = document.getElementById("input")

/* Gets input(which is a string), splits the word into letters ["hello" -> "h" "e" "l" "l" "o"], reverses it and
then puts it with join back together ["olleh"]  */
function reverseString(str) {
    return str.split("").reverse().join("")
}

function check() {
    const value = input.value;
    const reverse = reverseString(value)
    
    if (value === reverse) {
        alert("P A L I N D R O M E")
    } else {
        alert("Not today")
    }

    input.value = ""
}