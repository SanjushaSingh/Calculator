let upBox = document.getElementsByTagName("input")[0];
let buttons = document.querySelectorAll('button');
let string = " ";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            upBox.value = string;
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            upBox.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0,string.length-1);
            upBox.value = string;
        }
        else {
            
        string += e.target.innerHTML;
        upBox.value = string;
    
        }

    
        
    });
    
});