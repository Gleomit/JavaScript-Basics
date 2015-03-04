function findMinAndMax(arr)
{
    for(var i = 0; i < arr.length; i++)
    {
        for(var j = 0; j < arr.length; j++)
        {
            if(arr[i] < arr[j])
            {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log("Min -> " + arr[0]);
    console.log("Max -> " + arr[arr.length - 1]);
}

findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31]);
findMinAndMax([2, 2, 2, 2, 2]);
findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]);