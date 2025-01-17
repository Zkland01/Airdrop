// Array of airdrop objects with detailed descriptions
const airdrops = [
    { name: "ZIZLE", value: "Exclusive NFT Rewards", action: "Collect unique digital assets during the event." },
    { name: "Euphoria", value: "High Potential Token", action: "Join the waitlist to secure early access to this DeFi platform." },
    { name: "Tree Stuck in Cat", value: "Eco-Friendly Initiative", action: "Support environmental causes by engaging with the platform." },
    { name: "Assisterr", value: "Testnet Participation", action: "Engage with the testnet and provide feedback to earn rewards." },
    { name: "De.Fi", value: "DeFi Analytics Tools", action: "Explore the platform's analytics tools and participate in quizzes for rewards." },
    { name: "TONCA$H", value: "Daily Engagement Rewards", action: "Shop online, check in daily, and refer friends to maximize rewards." },
    { name: "OpenLedger", value: "Blockchain Explorer Rewards", action: "Earn points by exploring blockchain insights and contributing to the community." },
    { name: "Network3", value: "Validator Incentives", action: "Run nodes and participate in network validation to earn rewards." },
    { name: "Time Farm", value: "Telegram Token Farming", action: "Farm free SECOND tokens by engaging with the Telegram bot." },
    { name: "Cookie DAO", value: "Staking Opportunities", action: "Stake tokens and earn points to gain access to governance decisions." },
    { name: "SoonChain", value: "Upcoming Layer 1 Blockchain", action: "Learn about the chain's innovative features and prepare for future airdrops." },
    { name: "HeyElsa", value: "AI Engagement Rewards", action: "Interact with the AI to earn points and gain insights into AI-based solutions." },
    { name: "Crestal Network", value: "Testnet Quests", action: "Complete specific quests on the testnet to earn valuable tokens." },
  ];
  
  // Reference to the container
  const container = document.getElementById("airdrop-container");
  
  // Generate the cards dynamically
  container.innerHTML = airdrops
    .map(
      (airdrop) => `
      <div class="card">
        <header class="card-header">
          <h2>${airdrop.name}</h2>
        </header>
        <div class="card-body">
          <p><strong>Value:</strong> ${airdrop.value}</p>
          <p><strong>Action:</strong> ${airdrop.action}</p>
        </div>
      </div>
    `
    )
    .join("");
  