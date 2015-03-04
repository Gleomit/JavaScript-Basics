function sumTwoHugeNumbers(value)
{
    var firstNum = value[0];
    var secondNum = value[1];
    var theBig = '';
    var theMin = '';
    var maxLength = Math.max(firstNum.length, secondNum.length);
    if(firstNum.length === maxLength)
    {
        theBig = firstNum;
        theMin = secondNum;
    }
    else
    {
        theBig = secondNum;
        theMin = firstNum;
    }

    var temp = maxLength - theMin.length;
    for(var i = 0; i < temp;i++)
        theMin = '0' + theMin;

    theBig = theBig.split('');
    theMin = theMin.split('');

    theBig.reverse();
    theMin.reverse();

    for(var i = 0; i < maxLength;i++)
    {
        var add = Number(theBig[i]) + Number(theMin[i]);

        if(add >= 10)
        {
            theBig[i] = (add - 10).toString();
            if(theBig[i + 1])
                theBig[i + 1] = (Number(theBig[i + 1]) + 1).toString();
            else
                theBig[i + 1] = '1';
        }
        else
            theBig[i] = add.toString();
    }
    theBig.reverse();
    console.log(theBig.join(''));
}
sumTwoHugeNumbers(['155', '65']);
sumTwoHugeNumbers(['123456789', '123456789']);
sumTwoHugeNumbers(['887987345974539', '4582796427862587']);
sumTwoHugeNumbers(['347135713985789531798031509832579382573195807', '817651358763158761358796358971685973163314321']); // Отговорът на този пример е грешно даден в условието, може да проверитев интернет, като ги съберете : )
