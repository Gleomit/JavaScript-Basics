window.onload = displayDivsAsUl;

function displayDivsAsUl() {
    var divElements = document.getElementsByTagName('div');
    console.log(divElements.length);
    var ul = document.createElement('ul');

    for (var i = 0; i < divElements.length; i++) {
        console.log(divElements[i].parentElement.tagName);
        if (divElements[i].parentElement.tagName != 'DIV' && divElements[i].innerHTML != '') {
            var li = document.createElement('li');

            li.innerHTML = divElements[i].innerHTML;
            ul.appendChild(li);
        }
    }
    document.body.appendChild(ul);
}