let walletAmount = 100;

function spinGame() {
  const rewards = [0, 10, 20, 50, 100, 200, -10]; // random prizes (even loss!)
  const reward = rewards[Math.floor(Math.random() * rewards.length)];

  if (reward >= 0) {
    document.getElementById("spin-result").innerText = `🎉 You won ₹${reward}!`;
  } else {
    document.getElementById("spin-result").innerText = `😞 You lost ₹${Math.abs(reward)}`;
  }

  walletAmount += reward;
  if (walletAmount < 0) walletAmount = 0; // no negative wallet

  document.getElementById("wallet").innerText = `Wallet: ₹${walletAmount}`;
}
function loadGame(game) {
  const gameMessages = {
    winGo: "🎮 Win Go Game Loading...",
    k3: "🎲 K3 Game Coming Soon...",
    '5d': "🕹️ 5D Game Interface..."
  };
  document.getElementById("main-content").innerText = gameMessages[game];
}

function showPage(page) {
  const pageContent = {
    home: "🏠 Home Page",
    activity: "📊 Recent Activity",
    wallet: "💰 Your Wallet: ₹100",
    account: "👤 Account Information"
  };
  document.getElementById("main-content").innerText = pageContent[page];
}
