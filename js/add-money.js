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

        const div = document.createElement('div');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');

        div.classList.add('bg-lime-400', 'rounded-xl', 'mt-5', 'p-5');

        h4.innerText = 'Add Money';
       h4.classList.add('text-2xl', 'font-bold', 'text-center');

        p.innerText = `Added: ${addMoney} Tk.
        New Balance: ${newBalance}`;

        p.classList.add('text-xl', 'font-bold', 'text-center');

        div.appendChild(h4);
        div.appendChild(p);

        document.getElementById('transaction-container').appendChild(div);
    }

    else{
        alert('Please try again!');
    }
})