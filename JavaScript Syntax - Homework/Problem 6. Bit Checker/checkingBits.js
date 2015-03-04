function bitChecker(number) {
    var theWantedBit = number.toString(2).charAt(number.toString(2).length - 4);
    console.log((theWantedBit === "1"));
}

bitChecker(333);
bitChecker(425);
bitChecker(2567564754);