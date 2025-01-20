
const airdrops = [
  { name: "ZIZLE", value: "Exclusive NFT Rewards", action: "Collect unique digital assets during the event." },
  { name: "Euphoria", value: "High Potential Token", action: "Join the waitlist to secure early access to this DeFi platform." },
  { name: "Tree Stuck in Cat", value: "Eco-Friendly Initiative", action: "Support environmental causes by engaging with the platform." },
  { name: "Assisterr", value: "Testnet Participation", action: "Engage with the testnet and provide feedback to earn rewards." },
];

async function connect() {
  const placeholder = document.getElementById("placeholder");
  const airdropContainer = document.getElementById("airdrop-container");
  const connectButton = document.getElementById("connect-button");
  const portfolioValue=document.getElementById("portfolio")
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      const walletAddress = accounts[0];
      connectButton.textContent = `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`;
   // Get the balance in Wei
   const web3 = new Web3(window.ethereum);
  const balanceWei = await web3.eth.getBalance(walletAddress);
  const balanceEther = web3.utils.fromWei(balanceWei, "ether");

  // Format the balance to 2 decimal places and update the portfolio value
  const formattedBalance = parseFloat(balanceEther).toFixed(6);
  portfolioValue.textContent = `${formattedBalance} ETH`;

alert(`Wallet: ${walletAddress}\nBalance: ${balanceEther} `);

      connectButton.style.pointerEvents = "none";

      placeholder.style.display = "none";
      airdropContainer.style.display = "flex";
      populateAirdrops();
    } catch (error) {
      console.error("User rejected the connection request:", error);
    }
  } else {
    alert("No wallet detected. Please install MetaMask or another Web3 wallet.");
  }
}

function populateAirdrops() {
  const container = document.getElementById("airdrop-container");
  airdrops.forEach(airdrop => {
    const cardHtml = `
      <div class="card">
        <header class="card-header">
          <h2>${airdrop.name}</h2>
        </header>
        <div class="card-body">
          <p><strong>Value:</strong> ${airdrop.value}</p>
          <p><strong>Action:</strong> ${airdrop.action}</p>
          <button class="join-button" onclick="showTaskModal()">Join</button>
        </div>
      </div>
    `;
    container.innerHTML += cardHtml;
  });
}

function showTaskModal() {
  const taskModal = document.getElementById("task-modal");
  taskModal.style.display = "flex";

  setTimeout(() => {
    taskModal.style.display = "none";
    showAccountsModal();
  }, 3000);
}

function showAccountsModal() {
  const accountsModal = document.getElementById("accounts-modal");
  accountsModal.style.display = "flex";
}

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
      <p><strong>Wallet ${i + 1}:</strong><br> ${wallet}</p>
    `;
  }

  showWalletModal();
}

function copyWallets() {
const walletContainer = document.getElementById("wallet-container");
const textToCopy = walletContainer.textContent.trim(); // Get all text inside the container
navigator.clipboard.writeText(textToCopy).then(() => {
alert("Wallet addresses and private keys copied to clipboard!");
}).catch(err => {
console.error("Failed to copy text: ", err);
});
}

// Modified generateSimulatedWallet function using ethers.js
function generateSimulatedWallet() {
  // Wait until the ethers.js script is loaded
  const web3 = new Web3(Web3.givenProvider);
    // Create a random wallet using ethers.js
    const wallet= web3.eth.accounts.create();
          // Log wallet address and private key


// Return the wallet address and private key as a string
return `${wallet.address} (Private Key: ${wallet.privateKey})`;
}

function showWalletModal() {
  const walletModal = document.getElementById("wallet-modal");
  walletModal.style.display = "flex";
}

function closeWalletModal() {
  const walletModal = document.getElementById("wallet-modal");
  walletModal.style.display = "none";
}


function showDumperModal() {
  const dumperModal = document.getElementById("dumper-modal");
  dumperModal.style.display = "flex";
}

function closeDumperModal() {
  const dumperModal = document.getElementById("dumper-modal");
  dumperModal.style.display = "none";
}

function showCreateModal() {
  const dumperModal = document.getElementById("create-modal");
  dumperModal.style.display = "flex";
}

function closeCreateModal() {
  const dumperModal = document.getElementById("create-modal");
  dumperModal.style.display = "none";
}
