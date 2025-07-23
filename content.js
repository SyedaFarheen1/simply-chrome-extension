if (!document.getElementById("simply-explain-box")) {
  const explainBox = document.createElement("div");
  explainBox.id = "simply-explain-box";
  explainBox.innerText = "👋 Hello! Simply is now active on this page.";
  explainBox.style.position = "fixed";
  explainBox.style.bottom = "20px";
  explainBox.style.right = "20px";
  explainBox.style.backgroundColor = "#4a90e2";
  explainBox.style.color = "white";
  explainBox.style.padding = "10px 15px";
  explainBox.style.borderRadius = "12px";
  explainBox.style.zIndex = 9999;
  explainBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  explainBox.style.fontFamily = "sans-serif";
  explainBox.style.fontSize = "14px";

  document.body.appendChild(explainBox);

  setTimeout(() => {
    explainBox.remove();
  }, 4000);
}
