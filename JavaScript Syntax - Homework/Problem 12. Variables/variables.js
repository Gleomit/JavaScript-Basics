function variablesTypes(arr) {
    var tempArr = [];
    tempArr.push("My name: " + arr[0] + " //type is " + typeof (arr[0]));
    tempArr.push("My age: " + arr[1] + " //type is " + typeof (arr[1]));
    tempArr.push("I am male: " + arr[2] + " //type is " + typeof (arr[2]));
    tempArr.push("My favorite foods are: " + arr[3] + " //type is " + typeof (arr[3]));

    for (var i in tempArr)
        console.log(tempArr[i]);
    return tempArr;
}

variablesTypes(['Pesho', 22, true, ['fries', 'banana', 'cake']]);