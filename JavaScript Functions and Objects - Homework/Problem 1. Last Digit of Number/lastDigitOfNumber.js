function lastDigitAsText(number)
{
    var lastDigit = Number(number.toString().charAt(number.toString().length - 1));
    var lastDigitString = "";
    switch(lastDigit)
    {
        case 0:
            lastDigitString = "Zero";
            break;
        case 1:
            lastDigitString = "One";
            break;
        case 2:
            lastDigitString = "Two";
            break;
        case 3:
            lastDigitString = "Three";
            break;
        case 4:
            lastDigitString = "Four";
            break;
        case 5:
            lastDigitString = "Five";
            break;
        case 6:
            lastDigitString = "Six";
            break;
        case 7:
            lastDigitString = "Seven";
            break;
        case 8:
            lastDigitString = "Eight";
            break;
        case 9:
            lastDigitString = "Nine";
            break;
    }
    return lastDigitString;
}

console.log(lastDigitAsText(6));
console.log(lastDigitAsText(-55));
console.log(lastDigitAsText(133));
console.log(lastDigitAsText(14567));