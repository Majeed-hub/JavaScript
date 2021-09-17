function Display(){
    let output = document.getElementById('display');
    let fruits = ["Apple","Banana","mango"];
    let list="";
    for(let i = 0 ; i<fruits.length; i++){
        list += "<li>"+ fruits[i] + "</li>";

    }
    output.innerHTML = list;
}