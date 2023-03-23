function myFun(x){
    if(document.getElementById("input").value == 0){
        document.getElementById("input").value ="";
        document.getElementById("input").value = x;  
    }
    else{
        document.getElementById("input").value += x;
    }
    
}
function solve(){
    var x=document.getElementById("input").value;
    var y=parseFloat(x);
    document.getElementById("input").value =y;
}

/*function clear(){
    document.getElementById("input").value =;
}*/

function allclear(){
    document.getElementById("input").value = " ";
}

//document.write(eval(10+5));
//document.write(parseInt("10+5"));
//document.write(parseFloat(10.3jbvuerg));
