



let first = document.getElementById("abc");
let  second = document.getElementById("xyz");
let result = document.getElementById("haha");

let num1 = 0;
let num2 = 0;

function player1()
{
    let a = Math.random()*1000;
     num1 = parseInt(a);

     first.value = num1;

     
}
function player2()
{
    let c = Math.random()*1200;
     num2 = parseInt(c);

     second.value = num2;

     res();

}


function res()
{
     
     
        if(num1>num2)
        {
            result.innerHTML = "First Num is Greatest : "+num1;
        }
        else if(num1 < num2)
        {
            result.innerHTML = "Second Num is Greatest : "+num2;
        }
        else
        {
            result.innerHTML = "Equal";
        }
}
