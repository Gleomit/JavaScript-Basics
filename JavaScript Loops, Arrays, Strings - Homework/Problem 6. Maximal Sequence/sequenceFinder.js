function findMaxSequence(arr)
{
    var currentSymbol = arr[0];
    var times = 1;
    
    var iteratingSymbol = arr[0];
    var iteratingTimes = 1;
    
    for(var i = 1 ;i < arr.length;i++)
    {
        if(iteratingTimes >= times)
        {
            times = iteratingTimes;
            currentSymbol = iteratingSymbol;
        }
        
        if(iteratingSymbol == arr[i])
        {
            iteratingTimes++;
        }
        else
        {
            
            iteratingSymbol = arr[i];
            iteratingTimes = 1;
        }
        
    }
    arr = [];
    for(var i = 0; i < times; i++)
    {
        arr[i] = currentSymbol;
    }
    console.log(arr);
}

findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
findMaxSequence(['happy']);
findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']);