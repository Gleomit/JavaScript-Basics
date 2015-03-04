function findLargestBySumOfDigits(arr)
{
    var intCount = 0;
    for(var i in arr)
    {
        if(arr[i] === parseInt(arr[i]))
            intCount++;
    }
    if(arr.length <= 0 || intCount < arr.length)
    {
        return undefined;
    }
    else
    {
        var largest = 0;
        var theElement = 0;
        for(var i = 0; i < arr.length;i++)
        {
            var temp = arr[i].toString();
            var toTest = 0;
            for(var j in temp)
            {
                if(!isNaN(temp[j]))
                    toTest += Number(temp[j]);
            }
            if(toTest > largest)
            {
                theElement = arr[i];
                largest = toTest;
            }
        }
        return theElement;
    }
}

console.log(findLargestBySumOfDigits([5, 10, 15, 111]));
console.log(findLargestBySumOfDigits([33, 44, -99, 0, 20]));
console.log(findLargestBySumOfDigits(['hello']));
console.log(findLargestBySumOfDigits([5, 3.3]));