

function addToDisplay(value){
    document.getElementById('display').value += value;
}

function calculate(){
    try{
        const displayExpression = document.getElementById('display').value;
    const result = new Function('return '+ displayExpression)();
    document.getElementById('display').value = result;
    }
    catch{
        document.getElementById('display').value = 'Please Provide Correct Expression';
    }
    
}

function clearDisplay(){
    document.getElementById('display').value = '';
}