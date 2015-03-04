function clone(obj)
{
    var cloned = Object;
    for(var property in obj){
       cloned[property] = obj[property];
    }
    return cloned;
}

var a = {name: 'Pesho', age: 21};
var b = clone(a);
compareObjects(a, b);  

function compareObjects(obj, objCopy)
{
    console.log(obj == objCopy);
}

var a = {name: 'Pesho', age: 21} ;
var b = a; // not a deep copy
compareObjects(a, b);  
