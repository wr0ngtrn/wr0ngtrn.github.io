function navigate(section) {
  showLoader();
  setTimeout(() => {
    document.getElementById("homePage").style.display = "none";
    document.getElementById("activityPage").style.display = "none";

    if (section === "Home") document.getElementById("homePage").style.display = "block";
    if (section === "Activity") document.getElementById("activityPage").style.display = "block";

    // add other sections as needed

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const loginOverlay = document.getElementById("loginOverlay");
  const mainContent = document.getElementById("mainContent");
  const errorMsg = document.getElementById("errorMsg");

  loginBtn.addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "admin" && password === "1234") {
      loginOverlay.style.display = "none"; // Hide login screen
      mainContent.classList.remove("hidden"); // Show main content
    } else {
      errorMsg.innerText = "Invalid username or password.";
    }
  });

  const wingoButton = document.getElementById("openWingo");
  if (wingoButton) {
    wingoButton.addEventListener("click", () => {
      document.getElementById("wingoGame").classList.remove("hidden");
    });
  }
}); 
function showSection(sectionName) {
  alert(You selected the ${sectionName} category.);
}

function playGame(gameName) {
  alert(Launching ${gameName}...);
}

function navigate(pageName) {
  alert(Navigating to ${pageName} page.);
} }, 500);
}