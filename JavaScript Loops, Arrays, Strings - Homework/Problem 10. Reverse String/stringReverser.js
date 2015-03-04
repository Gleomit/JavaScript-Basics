function reverseString(str)
{
    var temp = '';
    for(var i = str.length - 1; i >= 0;i--)
    {
        temp += str.charAt(i);
    }
    console.log(temp);
    return temp;
}

reverseString('sample');
reverseString('softuni');
reverseString('java script');