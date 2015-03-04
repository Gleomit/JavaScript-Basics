document.getElementById('btnHideOddRows').onclick = hideRows;

function hideRows()
{
    var trElements = document.getElementsByTagName('tr');
    for(var i = 0; i < trElements.length; i++)
    {
        if(i % 2 === 0 && trElements[i].style.display === 'none'){
            trElements[i].style.display = 'table-row';
        }
        else if(i % 2 === 0){
            trElements[i].style.display = 'none';
        }
    }
}