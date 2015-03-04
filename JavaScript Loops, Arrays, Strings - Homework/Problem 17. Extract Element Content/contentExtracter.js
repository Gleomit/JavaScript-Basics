function extractContent(str)
{
    var startIndex = 0;
    var endIndex = 0;
    var iterator = 0;
    while(iterator < str.length)
    {
        if(str[iterator] === "<")
        {
            startIndex = iterator;
        }
        else if(str[iterator] === ">")
        {
            endIndex = iterator;
            str = str.substring(0, startIndex) + str.substring(endIndex + 1, str.length);
            
            iterator -= endIndex - startIndex;
        }
        iterator++;
    }
    console.log(str);
}

extractContent('<p>Hello</p><a href=\'http://w3c.org\'>W3C</a>');