function replaceSpaces(str)
{
    var temp = str.split(" ");
    str = "";
    for(var i = 0; i < temp.length;i++)
    {
        str += temp[i];
    }
    console.log(str);
}

replaceSpaces('But you were living in another world tryin\' to get your message through');