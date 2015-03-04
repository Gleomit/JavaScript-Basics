function findCardFrequency(str)
{
    var facesContainer = str.match(/[AKJQ]|[0-9]+/g);
    var differentFaces = [];
    var facesCounters = [];
    
    for(var i = 0; i < facesContainer.length;i++)
    {
        var toAdd = true;
        for(var j = 0; j < differentFaces.length;j++)
        {
            if(facesContainer[i] === differentFaces[j])
            {
                facesCounters[j] = facesCounters[j] + 1;
                toAdd = false;
                break;
            }
        }
        if(toAdd === true)
        {
            differentFaces.push(facesContainer[i]);
            facesCounters.push(1);
        }
    }
    
    for(var i = 0; i < differentFaces.length;i++)
    {
        facesCounters[i] = (facesCounters[i] / facesContainer.length) * 100;
        console.log(differentFaces[i] + " -> " + facesCounters[i].toFixed(2) + "%");
    }
}

findCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');
findCardFrequency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠');
findCardFrequency('10♣ 10♥');