document.getElementById('textField').addEventListener('keyup', keyUp, false);

function keyUp(event)
{
    var theField = document.getElementById('textField');
    if(event.keyCode < 48 || event.keyCode > 57)
    {
        theField.style.backgroundColor = '#f00';
        theField.value = theField.value.substring(0, theField.value.length - 1);
        setTimeout(function(){ theField.style.backgroundColor = '#fff'; }, 1000);
    }
}