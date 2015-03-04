function replaceATag(str)
{
    var anchors = str.match(/<a [^>]+>([^<]+)<\/a>/g);
    var modifiedAnchors = [];
    for(var i = 0; i < anchors.length;i++)
    {
        modifiedAnchors.push("<URL " + anchors[i].substring(3, anchors[i].length - 4) + "></URL>");
        str = str.substring(0, str.search(anchors[i])) + modifiedAnchors[i] + str.substring(str.search(anchors[i]) + anchors[i].length, str.length);  
    }
    console.log(str);
}

replaceATag('<ul><li><a href=http://softuni.bg>SoftUni</a></li></ul>');