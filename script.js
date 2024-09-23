let donationHistory = JSON.parse(localStorage.getItem('donationHistory')) || [];

function donate(country, cardId) {
    const donationAmountInput = document.getElementById(`donation-amount-${cardId}`);
    const donationAmount = parseInt(donationAmountInput.value);
    const currentDonationElement = document.getElementById(`current-donation-amount-${cardId}`);
    const balanceElement = document.getElementById('balance');
    const errorMessage = document.getElementById(`error-message-${cardId}`);

    if (isNaN(donationAmount) || donationAmount < 100) {
        errorMessage.textContent = 'Please enter a valid amount (minimum 100 BDT)';
        donationAmountInput.style.borderColor = 'red';
    } else {
        errorMessage.textContent = '';
        donationAmountInput.style.borderColor = '';

        // Update current donation and balance
        currentDonationElement.textContent = parseInt(currentDonationElement.textContent) + donationAmount + ' BDT';
        balanceElement.textContent = (parseInt(balanceElement.textContent) - donationAmount) + ' BDT';

        // Save donation to history with timestamp and country
        const donationRecord = {
            amount: donationAmount,
            country: country,
            time: new Date().toLocaleString(),
        };
        donationHistory.push(donationRecord);
        localStorage.setItem('donationHistory', JSON.stringify(donationHistory));

        // Change button color
        const button = donationAmountInput.nextElementSibling;
        button.style.backgroundColor = 'green';

        // Show confirmation card
        showConfirmationCard();
    }
}

function showConfirmationCard() {
    const card = document.getElementById('confirmationCard');
    card.style.display = 'block';
}

function closeConfirmationCard() {
    const card = document.getElementById('confirmationCard');
    card.style.display = 'none';
}

function openHistory() {
    const historyCard = document.getElementById('historyCard');
    const historyList = document.getElementById('donation-history-list');
    historyList.innerHTML = ''; // Clear previous history
    const savedHistory = JSON.parse(localStorage.getItem('donationHistory')) || [];
    savedHistory.forEach(record => {
        const listItem = document.createElement('li');
        listItem.textContent = `${record.amount} BDT donated to ${record.country} on ${record.time}`;
        historyList.appendChild(listItem);
    });

    historyCard.style.display = 'block';
}

function closeHistory() {
    const historyCard = document.getElementById('historyCard');
    historyCard.style.display = 'none';
}
