let input=document.getElementById('input');
let buttons=document.querySelectorAll('button');

let string="";
let arr=Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string=eval(string);
            input.value=string;
        }
        else if(e.target.innerHTML=="AC"){
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML=="DEL"){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else if (e.target.innerHTML == "( )") {
            handleParentheses();
        }
        else{
            string += e.target.innerHTML;
            input.value=string;
        }
    })
});
function handleParentheses() {
    let openParentheses = (string.match(/\(/g) || []).length;
    let closeParentheses = (string.match(/\)/g) || []).length;

    if (openParentheses > closeParentheses) {
        string += ")";
    } else {
        string += "(";
    }
    input.value = string;
}
