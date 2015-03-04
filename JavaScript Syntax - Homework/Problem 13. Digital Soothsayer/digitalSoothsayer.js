function soothsayer(numsArr, langsArr, citiesArr, carsArr) {
    var result = [numsArr[Math.floor(Math.random() * 4)], langsArr[Math.floor(Math.random() * 4)], citiesArr[Math.floor(Math.random() * 4)], carsArr[Math.floor(Math.random() * 4)]];
    console.log("You will work " + result[0] + " years on " + result[1] + ". You will live in " + result[2] + " and drive " + result[3] + ".");
    return result;
}

soothsayer([3, 5, 2, 7, 9], ['Java', 'Python', 'C#', 'JavaScript', 'Ruby'], ['Silicon Valley', 'London', 'Las Vegas', 'Paris', 'Sofia'], ['BMW', 'Audi', 'Lada', 'Skoda', 'Opel']);