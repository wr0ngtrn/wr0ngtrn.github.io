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
