function valueButton(e){
    calculatorform.screen.value += e.value;
}

function Clear(){
    calculatorform.screen.value= null;
}

function Backspace(){
    calculatorform.screen.value= calculatorform.screen.value.substring(0, calculatorform.screen.value.length-1);
}

function Calculate(){
    calculatorform.screen.value= eval(calculatorform.screen.value);
}
