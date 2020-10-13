function myFunction(){
    document.getElementById("1").style = ("text-align: center; color: yellow; background-color: green");
    
    document.getElementsByTagName("p")[0].style.fontWeight = "bold";
    document.getElementsByTagName("p")[1].style.fontWeight = "bold"; 
    document.getElementsByTagName("p")[2].style.fontWeight = "bold"; 
    document.getElementsByTagName("p")[3].style.fontWeight = "bold"; 
    document.getElementsByTagName("p")[4].style.fontWeight = "bold";
    
    document.getElementsByTagName("div")[1].style.backgroundColor = "red";
    document.getElementsByTagName("div")[3].style.backgroundColor = "grey";
    console.table(document.getElementsByTagName("p"));
    
  }

  