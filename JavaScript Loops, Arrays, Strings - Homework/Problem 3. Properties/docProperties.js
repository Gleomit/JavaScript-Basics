function displayProperties()
{
    var props = [];
    for(var i in document)
    {
        props.push(i);
    }
    props.sort();
    for(var i in props)
        console.log(props[i]);
}

displayProperties();