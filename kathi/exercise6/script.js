var multiArray = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 25, 7],
    [21, 4, 6, 17],
    [3, 5, 26, 3]
];

// Select and output the numbers 11, 25, 17, 27, and 0 in the console or select an HTML and print them in there.

console.log(multiArray[1][1], multiArray[4][2], multiArray[5][3], multiArray[2][3], multiArray[2][1]);

// document.write(multiArray[1][1] + "<br>" + multiArray[4][2] + "<br>" + multiArray[5][3] + "<br>" + multiArray[2][3] + "<br>" + multiArray[2][1]);

document.getElementById("result").innerHTML = multiArray[1][1] + "<br>" + multiArray[4][2] + "<br>" + multiArray[5][3] + "<br>" + multiArray[2][3] + "<br>" + multiArray[2][1];