// Track the total donation amount and individual card donations
let totalDonation = 0;
let balance = 5500;

function setActive(button) {
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.option button');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to the clicked button
    button.classList.add('active');
}

function openHistory() {
    // Your history logic here
    console.log('History button clicked');
}

// Donation function
function donate(location, cardNumber) {
    const donationInput = document.getElementById(`donation-amount-${cardNumber}`);
    const currentAmountElem = document.getElementById(`current-donation-amount-${cardNumber}`);
    const donationAmount = parseInt(donationInput.value);
    const errorMessage = document.getElementById(`error-message-${cardNumber}`);

    if (isNaN(donationAmount) || donationAmount <= 0) {
        errorMessage.textContent = "Please enter a valid amount.";
        return;
    }

    if (donationAmount > balance) {
        errorMessage.textContent = "Insufficient balance!";
        return;
    }

    balance -= donationAmount;
    totalDonation += donationAmount;

    currentAmountElem.textContent = `${donationAmount} BDT`;
    document.getElementById("donation-total").textContent = `${totalDonation} BDT`;
    document.getElementById("balance").textContent = `${balance} BDT`;

    // Add to donation history
    const historyList = document.getElementById("donation-history-list");
    const listItem = document.createElement("li");
    const date = new Date();
    listItem.textContent = `Donated ${donationAmount} BDT to ${location} on ${date.toLocaleString()}`;
    historyList.appendChild(listItem);

    // Show confirmation card
    showConfirmationCard();
}

// Show confirmation card
function showConfirmationCard() {
    const confirmationCard = document.getElementById("confirmationCard");
    confirmationCard.style.display = "block";
}

// Close confirmation card
function closeConfirmationCard() {
    const confirmationCard = document.getElementById("confirmationCard");
    confirmationCard.style.display = "none";
}

// Show donation history
function openHistory() {
    const historyCard = document.getElementById("historyCard");
    historyCard.style.display = "block";
}

// Close donation history


function showHistoryCard() {
    document.getElementById("historyCard").style.display = "block";
}

function closeHistory() {
    document.getElementById("historyCard").style.display = "none";
}
