let upBox = document.getElementsByTagName("input")[0];
let buttons = document.querySelectorAll('button');
let string = " ";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == 'AC') {
            string.updateDisplay();
        }
        if (e.target.innerHTML == '=') {
            string = eval(string);
            upBox.value = string;
        }
        string += e.target.innerHTML;
        upBox.value = string;
    
        
    });
    
});