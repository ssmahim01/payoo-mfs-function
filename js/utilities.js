// Common shared function

function getInputValueById(id){
    const inputValue = document.getElementById(id).value;

    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showContentById(id){
    // Hide all Contents.

    document.getElementById('add-money-content').classList.add('hidden');
    document.getElementById('cash-out-content').classList.add('hidden');
    document.getElementById('transaction-history').classList.add('hidden');

    // Show the content with the provide id as parameter.

    document.getElementById(id).classList.remove('hidden');
}