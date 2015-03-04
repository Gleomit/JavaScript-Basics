function createArray()
{
    var myArray = Array(20);
    for(var i = 0;i < myArray.length;i++)
    {
        myArray[i] = i * 5;
    }
    console.log(myArray);
}
createArray();