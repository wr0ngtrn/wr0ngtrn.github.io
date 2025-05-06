function navigate(section) {
  showLoader();
  setTimeout(() => {
    document.getElementById("homePage").style.display = "none";
    document.getElementById("activityPage").style.display = "none";

    if (section === "Home") document.getElementById("homePage").style.display = "block";
    if (section === "Activity") document.getElementById("activityPage").style.display = "block";

    // add other sections as needed
  }, 500);
}