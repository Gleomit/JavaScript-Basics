Array.prototype.removeItem = function (value)
{
    var i = 0;
    while(i < this.length)
    {
        if(this[i] === value)
        {
            this.splice(i, 1);
        }
        i++;
    }        
    console.log(this);
}

var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
arr.removeItem(1);

var arr = ['hi', 'bye', 'hello' ];
arr.removeItem('bye');