function calculateAndWrite() {
    var textExpression = document.getElementById("expression").value;
    if (/[0-9\+\-\*\/\.]/.test(textExpression)) {
        document.getElementById("result").innerHTML = eval(textExpression);
    } else {
        alert("Enter valid expression");
        document.getElementById("expression").value = "";
    }
}