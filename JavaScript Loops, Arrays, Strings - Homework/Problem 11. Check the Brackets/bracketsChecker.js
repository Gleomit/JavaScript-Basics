function checkBrackets(str)
{
    var left = str.match(/[\(]/g);
    var right = str.match(/[\)]/g);
    
    if(left.length < right.length || left.length > right.length)
        console.log('incorrect');
    else
        console.log('correct');
}

checkBrackets('( ( a + b ) / 5 – d )');
checkBrackets(') ( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )');