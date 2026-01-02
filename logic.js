"use strict";

const arr1 = [23, 56, 80, 93, 47];

const sendBtn = document.querySelector(".send-btn");
const loanBtn = document.querySelector(".credit-btn");
const closeBtn = document.querySelector(".block-btn");
const overlay = document.querySelector('.overlay');
const sendMoneyI = document.querySelector('.send-money');
const loanMoneyI = document.querySelector('.Request-money');
const closeAcc = document.querySelector('.acc-closure');
const cancelBtn = document.querySelector('.cancel-btn');
const actionInterface = document.querySelectorAll('.action-interface');
const closeLoan = document.querySelector('.close-loan');
const cancelClose = document.querySelector('.cancel-close')
const closeSend = document.querySelector('.cancel-send-money')

//accounts elements 
const userNameDisplay = document.querySelector('.username-display');
const balanceDisplay = document.querySelector('.main-balance');
const containerTransaction = document.getElementById('transaction');


// Buttons for the actions interface closing


// function to send money modal window
sendBtn.addEventListener(
    'click', function(){
        sendMoneyI.classList.remove('hidden')
        overlay.classList.remove('hidden')
    }
);
closeSend.addEventListener(
    'click', function(){
        sendMoneyI.classList.add('hidden')
        overlay.classList.add('hidden')
    }
);

// function requesting for loan modal window
loanBtn.addEventListener(
    'click', function(){
        loanMoneyI.classList.remove('hidden')
        overlay.classList.remove('hidden')
    }
)
closeLoan.addEventListener(
    'click', function(){
        loanMoneyI.classList.add('hidden')
        overlay.classList.add('hidden')
    }
)

// function requsting to delete account modal window
cancelBtn.addEventListener(
    'click', function(){
        closeAcc.classList.remove('hidden')
        overlay.classList.remove('hidden')
    }
)

cancelClose.addEventListener('click', function(){
    closeAcc.classList.add('hidden')
    overlay.classList.add('hidden')
})

// accounts and names using the object method 
// (owner, movements,pin, interest rate)

const account1 = {
    name: 'Arman Vandayan',
    movements: [6500, -1200, 2400, -700, -1800, 8000, -950],
    pin: 4829
};

const account2 = {
    name: 'Lief Scotgrom',
    movements: [4200, -300, -900, 5200, -1500, 700, -600],
    pin: 7713
};

const account3 = {
    name: 'Nari Matsukawa',
    movements: [3000, 7800, -2500, -400, 1600, -900, -1200],
    pin: 1594
};

const account4 = {
    name: 'Ilyas Qadriyelv', 
    movements: [8000, -3200, 2100, -700, -500, 4300, -1800],
    pin: 9867
}

const accounts = [account1, account2, account3, account4];
console.log(accounts)



// userNameDisplay.textContent = 'Solomon'


// showing cuurency using map
const currencies = new Map([
    ['USD', 'United State Dollars'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound Sterling']
]);

const mainMovements = [5200, -1400, 8000, -600, -2300, 1900, -750];

const displayMvt = function(mvt, sort = false){
    containerTransaction.innerHTML = '';
};
const mvs = sort ? 
mvt.slice().sort((a, b) => a - b) :
mvt;