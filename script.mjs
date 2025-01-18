import { ethers } from "ethers";

function closeAccountsModal() {
  const accountsModal = document.getElementById("accounts-modal");
  const selectedOption = document.querySelector('input[name="accounts"]:checked');
  
  if (selectedOption) {
    alert(`You selected ${selectedOption.value} accounts!`);
    accountsModal.style.display = "none";
    generateWallets(selectedOption.value);
  } else {
    alert("Please select a number of accounts to continue.");
  }
}


function generateWallets(count) {
  const walletContainer = document.getElementById("wallet-container");
  walletContainer.innerHTML = ""; // Clear previous wallets

  let wallets = [];

  for (let i = 0; i < count; i++) {
    const wallet = generateSimulatedWallet();
    wallets.push(wallet);
    walletContainer.innerHTML += `
      <p><strong>Wallet ${i + 1}:</strong> ${wallet}</p>
    `;
  }

  showWalletModal();
}

// Modified generateSimulatedWallet function using ethers.js
function generateSimulatedWallet() {
// Create a random wallet using ethers.js
const wallet = ethers.Wallet.createRandom();

// Return the wallet address and private key as a string
return `${wallet.address} (Private Key: ${wallet.privateKey})`;
}
