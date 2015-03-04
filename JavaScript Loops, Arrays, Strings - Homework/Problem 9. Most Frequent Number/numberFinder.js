function findMostFreqNum(arr)
{
    var times = 1;
    var mostFrequent = arr[0];
    var currentNumber = arr[0];
    var currentTimes = 1;
    for(var i = 0; i < arr.length; i ++)
    {
        for(var j = 0; j < arr.length; j++)
        {
            if(i != j && arr[i] === arr[j])
            {
                currentTimes++;
            }
            else if(arr[i] != arr[j])
            {
                currentNumber = arr[i];
                currentTimes = 1;
            }
            
            if(currentTimes > times)
            {
                times = currentTimes;
                mostFrequent = currentNumber;
            }
        }
    }
    console.log(mostFrequent + "(" + times + " times)");
}

findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]);
findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);