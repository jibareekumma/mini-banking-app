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