function convertKWtoHP(number) {
    number = number * 1.34102209;
    console.log(Math.round(number * 100) / 100);
}

convertKWtoHP(75);
convertKWtoHP(150);
convertKWtoHP(1000);