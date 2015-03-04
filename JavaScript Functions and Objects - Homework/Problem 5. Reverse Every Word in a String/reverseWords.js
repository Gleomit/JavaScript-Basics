function reverseWordsInString(str)
{
    var words = str.split(" ");
    var toDisplay = "";
    for(var i = 0; i < words.length;i++)
    {
        var tempWord = "";
        for(var j = words[i].length - 1; j >= 0;j--)
            tempWord += words[i][j];
        toDisplay += tempWord + " ";
    }
    toDisplay = toDisplay.substring(0, toDisplay.length - 1);
    console.log(toDisplay);
}

reverseWordsInString('Hello, how are you.');
reverseWordsInString('Life is pretty good, isn’t it?');