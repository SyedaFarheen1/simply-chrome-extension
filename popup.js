document.getElementById("explain").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      files: ["content.js"],
    });
  });
});

const themeToggle = document.getElementById("themeToggle");
const sunIcon = document.getElementById("sun");
const moonIcon = document.getElementById("moon");

function setTheme(mode) {
  if (mode === "dark") {
    document.body.classList.add("dark");
    themeToggle.checked = true;
    sunIcon.style.opacity = "0.4";
    moonIcon.style.opacity = "1";
  } else {
    document.body.classList.remove("dark");
    themeToggle.checked = false;
    sunIcon.style.opacity = "1";
    moonIcon.style.opacity = "0.4";
  }
  localStorage.setItem("theme", mode);
}

// Load saved or system theme
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const themeToUse = savedTheme || (prefersDark ? "dark" : "light");
  setTheme(themeToUse);
});

// Toggle handler
themeToggle.addEventListener("change", () => {
  const mode = themeToggle.checked ? "dark" : "light";
  setTheme(mode);
});
