function findPalindromes(str)
{
    var tempArr = str.match(/\w+/g);
    var palindromeArr = [];
    for(var i = 0; i < tempArr.length;i++)
    {
        tempArr[i] = tempArr[i].toLowerCase();
        var tempVal = '';
        for(var j = tempArr[i].length - 1; j >= 0;j--)
            tempVal += tempArr[i].charAt(j);
        
        if(tempArr[i] === tempVal)
            palindromeArr.push(tempVal);
    }
    console.log(palindromeArr);
}

findPalindromes('There is a man, his name was Bob.');
findPalindromes('lql');
findPalindromes('bqb');