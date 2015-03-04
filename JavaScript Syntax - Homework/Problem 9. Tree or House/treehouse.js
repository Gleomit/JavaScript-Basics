function treeHouseCompare(arr) {
    var house = arr[0] * arr[0] + ((arr[0] * (arr[0] * (2 / 3))) / 2);
    var tree = arr[1] * (arr[1] / 3) + (Math.PI * Math.pow((arr[1] + arr[1] / 3) / 2, 2));

    if (house > tree)
        console.log("house/" + house.toFixed(2));
    else
        console.log("tree/" + tree.toFixed(2));
}

treeHouseCompare([3, 2]);
treeHouseCompare([3, 3]);
treeHouseCompare([4, 5]);