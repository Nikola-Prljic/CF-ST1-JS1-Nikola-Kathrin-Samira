// H2 tag should be aligned to the center and the text color should be yellow and the background should be green.
document.querySelector("h2").style = "text-align: center; color: yellow; background-color: green";

// Each paragraph should be bold
document.getElementById("one").style.fontWeight = "bold";
document.getElementById("two").style.fontWeight = "bold";
document.getElementById("three").style.fontWeight = "bold";
document.getElementById("four").style.fontWeight = "bold";
document.getElementById("five").style.fontWeight = "bold";

// The 2nd and 4th div’s should have a background color of your choice.
document.getElementsByTagName("div")[1].style.backgroundColor = "yellow";
document.getElementsByTagName("div")[3].style.backgroundColor = "blue";

// All the spans' text should be italic.
document.getElementsByTagName("span")[0].style.fontStyle = "italic";
document.getElementsByTagName("span")[1].style.fontStyle = "italic";
document.getElementsByTagName("span")[2].style.fontStyle = "italic";
document.getElementsByTagName("span")[3].style.fontStyle = "italic";
document.getElementsByTagName("span")[4].style.fontStyle = "italic";

// Change the content of the last span to ‘subtitle footer’.
document.getElementsByTagName("span")[4].innerHTML = "subtitle footer";