function showSection(sectionName) {
  alert(You selected the ${sectionName} category.);
}

function playGame(gameName) {
  alert(Launching ${gameName}...);
}

function navigate(pageName) {
  alert(Navigating to ${pageName} page.);
}
document.getElementById("openWingo").addEventListener("click", function () {
  document.getElementById("wingoGame").classList.remove("hidden");
});

// Simple countdown
let countdown = 30;
const timer = document.getElementById("timer");
setInterval(() => {
  if (countdown > 0) {
    countdown--;
    timer.innerText = countdown;
  }
}, 1000);
