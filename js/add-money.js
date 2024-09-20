// Add money with current balance

document.getElementById('btn-add').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputValueById('add-money-amount-input');
    const pinNumber = getInputValueById('pin-input');

    if(isNaN(addMoney)){
        alert('Failed to Add money');
        return;
    }

    // Should not try to use through that

    if(pinNumber === 1234){
        const balance = getTextValueById('account-balance');

        const newBalance = balance + addMoney;

        document.getElementById('account-balance').innerText = newBalance;

        // Add to transaction history.

        const h4 = document.createElement('h4');
        const p = document.createElement('p');
        h4.innerText = 'Add Money';

        h4.style.textAlign = 'center';
        h4.style.fontWeight = 'bold';
        h4.style.fontSize = '1.3rem';

        p.innerText = `Added: ${addMoney} Tk.
        New Balance: ${newBalance}`;

        p.style.fontWeight = 'bold';
        p.style.fontSize = '1.3rem';
        p.style.textAlign = 'center';
        p.style.marginTop = '0.6rem';

        document.getElementById('transaction-container').appendChild(h4);
        document.getElementById('transaction-container').appendChild(p);
    }

    else{
        alert('Please try again!');
    }
})