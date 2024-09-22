// script.js
function donate(donationAmountId, donationTotalId) {
    const donationAmount = document.getElementById(donationAmountId).value;
    const donationTotal = document.getElementById(donationTotalId);
    if (donationAmount) {
      donationTotal.textContent = parseInt(donationTotal.textContent) + parseInt(donationAmount);
    }
  }