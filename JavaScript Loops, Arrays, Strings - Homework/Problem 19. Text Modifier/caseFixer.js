function fixCasing(str)
{
    var startIndex = 0;
    var endIndex = 0;
    var inMixcase = false;
    var inLowcase = false;
    var inUpcase = false;
    
    var startIndexToChange = 0;
    var endIndexToChange = 0;
    
    for(var symbol = 0; symbol < str.length; symbol++)
    {
        if(str.charAt(symbol) === "<")
        {
            endIndexToChange = symbol;
            if(inMixcase === true || inLowcase === true || inUpcase === true)
            {
                var innerHtml = str.slice(startIndexToChange,endIndexToChange);
                if(inMixcase === true)
                {
                    var rand;
                    for(var i = 0; i < innerHtml.length;i++)
                    {
                        rand = Math.floor(Math.random() * 2);
                        if(rand === 1)
                            innerHtml = innerHtml.substring(0, i) + innerHtml[i].toUpperCase() + innerHtml.substring(i + 1,innerHtml.length);
                        else
                            innerHtml[i] = innerHtml[i].toLowerCase();
                    }
                }
                else if(inLowcase === true)
                {
                    innerHtml = innerHtml.toLowerCase();
                }
                else if(inUpcase === true)
                {
                    innerHtml = innerHtml.toUpperCase();
                }
                str = str.substring(0, startIndexToChange) + innerHtml + str.substring(endIndexToChange, str.length);
                inMixcase = false;
                inLowcase = false;
                inUpcase = false;
            }
            startIndex = symbol + 1;
        }
        else if(str.charAt(symbol) === ">")
        {
            endIndex = symbol;
            startIndexToChange = symbol + 1;
            var temp = str.slice(startIndex,endIndex);
            if(temp === "mixcase")
                inMixcase = true;
            else if(temp === "upcase")
                inUpcase = true;
            else if(temp === "lowcase")
                inLowcase = true;
        }
    }
    var iterator = 0;
    while(iterator < str.length - 1)
    {
        if(str[iterator] === "<")
        {
            startIndex = iterator;
        }
        else if(str[iterator] === ">")
        {
            endIndex = iterator;
            str = str.substring(0, startIndex) + str.substring(endIndex + 1, str.length);
            console.log(startIndex + "       " +endIndex);
            iterator -= endIndex - startIndex;
        }
        iterator++;
    }
    console.log(str);
}

fixCasing('We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don\'t</mixcase> have <lowcase>anything</lowcase> else.');