function countSubstringOccur(arr)
{
    var keyword = arr[0].toLowerCase();
    var textArr = arr[1].split(" ");
    var times = 0;
    for(var i = 0; i < textArr.length;i++)
    {
        textArr[i] = textArr[i].toLowerCase();
        if(keyword === textArr[i])
            times++;
        else
        {
            for(var j = 0; j < textArr[i].length - keyword.length;j++)
            {
                if(textArr[i].substring(j, j + keyword.length) === keyword)
                    times++;
            }
        }
    }
    console.log(times);
}

countSubstringOccur(['in', 'We are living in a yellow submarine. We don\'t have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.']);

countSubstringOccur(['your', 'No one heard a single word you said. They should have seen it in your eyes. What was going around your head.']);

countSubstringOccur(['but', 'But you were living in another world tryin\' to get your message through.']);