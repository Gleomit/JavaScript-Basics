function findNthDigit(arr)
{
    var fixedNum = "";
    var theNum = arr[1].toString().split(/\D/g);
    for(var i in theNum)
        fixedNum += theNum[i];
    
    if(arr[0] > fixedNum.length)
    {
        console.log("The number doesn’t have " + arr[0] + " digits");
        return undefined;
    }
    else
    {
        console.log(fixedNum.charAt(fixedNum.length - arr[0]));
        return fixedNum.charAt(fixedNum.length - arr[0]);
    }
}

findNthDigit([1, 6]);
findNthDigit([2, -55]);
findNthDigit([6, 923456]);
findNthDigit([3, 1451.78]);
findNthDigit([6, 888.88]);