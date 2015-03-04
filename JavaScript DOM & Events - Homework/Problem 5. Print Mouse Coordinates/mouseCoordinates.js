document.addEventListener('mousemove', onMove, true);

function onMove(event) {
    var temp = new Date();
    temp.toDateString();
    var toPrint = 'X:' + event.clientX + '; Y:' + event.clientY + ' Time:' + temp.toDateString() + ' ' + temp.toTimeString();
    document.getElementById('textArea').innerHTML += toPrint + '\n';
}