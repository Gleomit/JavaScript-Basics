function findMostFreqWord(str)
{
    var theWords = str.match(/\w+/g);
    var times = [];
    var words = [];
    var maxTimes = 0;
    var finalWordsArr = [];
    
    for(var value in theWords)
    {
        theWords[value] = theWords[value].toLowerCase();
        var toAdd = true;
        var index = 0;
        for(var i = 0; i < words.length;i++)
        {
            if(words[i] === theWords[value])
            {
                toAdd = false;
                index = i;
                times[i] = times[i] + 1;
                if(times[i] > maxTimes)
                    maxTimes = times[i];
                break;
            }
        }
        if(toAdd == true)
        {
            times.push(1);
            words.push(theWords[value]);
        }
    }
    for(var i = 0; i < words.length; i++)
    {
        if(times[i] == maxTimes)
        {
            finalWordsArr.push(words[i]);
        }
    }
    
    finalWordsArr.sort();
    
    for(var i = 0; i < finalWordsArr.length; i++)
    {
        console.log(finalWordsArr[i] + " -> " + maxTimes + " times");
    }     
}


findMostFreqWord('in the middle of the night');
findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');
findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');