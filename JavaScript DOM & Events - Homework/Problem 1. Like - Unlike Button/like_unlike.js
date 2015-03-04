document.getElementById('button').onclick = toggle;

function toggle() {
    var value = document.getElementById('button');
    if (value.innerHTML === 'Like')
        value.innerHTML = 'Unlike';
    else
        value.innerHTML = 'Like';
}