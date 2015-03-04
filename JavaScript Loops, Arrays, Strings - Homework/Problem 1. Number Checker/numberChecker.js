function printNumbers(number)
{
    if(number <= 0)
        console.log("no");
    else
    {
        var temp = [];
        for(var i = 1; i <= number;i++)
        {
            if(i % 5 != 0 && i % 4 != 0)
                temp.push(i);
        }
        console.log(temp);
    }
}

printNumbers(20);
printNumbers(-5);
printNumbers(13);