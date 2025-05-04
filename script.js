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
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("openWingo").addEventListener("click", function () {
    document.getElementById("wingoGame").classList.remove("hidden");
  });

  // Countdown logic
  let countdown = 30;
  const timer = document.getElementById("timer");
  setInterval(() => {
    if (countdown > 0) {
      countdown--;
      timer.innerText = countdown;
    }
  }, 1000);
});
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const loginOverlay = document.getElementById("loginOverlay");
  const mainContent = document.getElementById("mainContent");
  const errorMsg = document.getElementById("errorMsg");

  loginBtn.addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Dummy check (you can add real authentication later)
    if (username === "admin" && password === "1234") {
      loginOverlay.style.display = "none";
      mainContent.classList.remove("hidden");
    } else {
      errorMsg.innerText = "Invalid username or password.";
    }
  });

  // Wingo open button logic
  document.getElementById("openWingo").addEventListener("click", function () {
    document.getElementById("wingoGame").classList.remove("hidden");
  });
});
