document.addEventListener('DOMContentLoaded',function(){
    const display=document.getElementById('display');
    const buttons=document.querySelectorAll('.btn');
    let currentInput='';
    let operator='';
    let operand1='';
    let operand2='';

    buttons.forEach(button=>{
        button.addEventListener('click',function(){
            const value=
            button.getAttribute('data-value');
            
            if(value==='+' || value==='-' || value==='*' || value==='/'){
                operator=value;
                operand1=currentInput;
                currentInput='';
            } else if(value==='='){
                operand2=currentInput;
                if(operand1 && operand2 && operator){
                    currentInput=calculate(operand1,operand2,operator);
                    display.value=currentInput;
                    operator='';
                    operand1='';
                    operand2='';
                }
            }else if(value==='C'){
                currentInput='';
                operator='';
                operand1='';
                operand2='';
                display.value='';
            }else{
                currentInput +=value;
                display.value=currentInput;
            }
        });
    });
    
    function calculate(operand1,operand2,operator){
        let result=0;
        operand1=parseFloat(operand1);
        operand2=parseFloat(operand2);
        switch(operator){
            case'+':
            result=operand1+operand2;
            break;
            case'-':
            result=operand1-operand2;
            break;
            case'*':
            result=operand1*operand2;
            break;
            case'/':
            if(operand2===0){
                return 'Error';
            }
            result=operand1/operand2;
            break;
        }
        return result.toString();
    }
});