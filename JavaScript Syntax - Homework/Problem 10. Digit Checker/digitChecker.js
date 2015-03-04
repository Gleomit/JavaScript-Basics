function checkDigit(number) {
    var temp = number.toString();
    console.log((temp.charAt(temp.length - 3) === "3"));
}

checkDigit(1235);
checkDigit(25368);
checkDigit(123456);