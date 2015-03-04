function findMaxSequence(arr)
{
    var theArr = [];
    var startIndex = 0;
    var endIndex = 0;
    var currentNumber;
    for(var i = 0; i < arr.length - 1;i++)
    { 
        currentNumber = arr[i];
        if(currentNumber < arr[i + 1])
        {   
            endIndex = i + 1;
        }
        else
        {
            startIndex = i + 1;
        }       
        if(arr.slice(startIndex,endIndex).length > theArr.length)
                theArr = arr.slice(startIndex,endIndex + 2);
    }
    
    if(theArr.length == 0)
        console.log("no");
    else
        console.log(theArr);
}

findMaxSequence([3, 2, 3, 4, 2, 2, 4]);
findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]);
findMaxSequence([3, 2, 1]);