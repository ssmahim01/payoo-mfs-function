// Cash Out and update the current balance

document.getElementById('btn-cash-out')
    .addEventListener('click', function(event){
        event.preventDefault();

        const cashOut = getInputValueById('cash-out-input');
        const pinNumber = getInputValueById('cash-out-pin-input');

        if(isNaN(cashOut)){
            alert('Failed to Cash Out');
            return;
        }

        if(pinNumber === 1234){

            const balance = getTextValueById('account-balance');

            if(cashOut > balance){
                alert('You do not have enough money to Cash Out');
                return;
            }

            const newBalance = balance - cashOut;

            document.getElementById('account-balance').innerText = newBalance;

            // Add to transaction history.

            const div = document.createElement('div');

            div.classList.add('text-center');
            div.innerHTML = `
            <h4 class="text-2xl font-bold">Cash Out</h4>
            <p class="text-xl font-bold">Withdraw: ${cashOut} Tk. <br>
            New Balance: ${newBalance}</p>
            `

            document.getElementById('transaction-container').appendChild(div);
        }

        else{
            alert('Failed to cash out! Try again');
        }
});