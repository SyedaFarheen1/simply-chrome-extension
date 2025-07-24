if (!document.getElementById("simplyExplainBox")) {
  const explainBox = document.createElement("div");
  explainBox.id = "simplyExplainBox";

  // Analyze page
  const pageTitle = document.title || "this website";
  const headings = Array.from(document.querySelectorAll("h1, h2"))
    .map((h) => h.innerText)
    .filter(Boolean);
  const buttons = Array.from(document.querySelectorAll("button, a")).filter(
    (btn) => btn.innerText && btn.innerText.length < 40
  );

  const summary = `
    You're on a page titled: "${pageTitle}".
    It looks like this page may be about: ${
      headings.slice(0, 2).join(" / ") || "general content"
    }.
    I found ${buttons.length} clickable buttons or links here.
    Let me highlight the most important one for you.
  `;

  // Styling
  explainBox.innerText = summary.trim();
  explainBox.style.position = "fixed";
  explainBox.style.bottom = "20px";
  explainBox.style.right = "20px";
  explainBox.style.backgroundColor = "#1f2937";
  explainBox.style.color = "white";
  explainBox.style.padding = "16px";
  explainBox.style.borderRadius = "12px";
  explainBox.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
  explainBox.style.zIndex = 9999;
  explainBox.style.maxWidth = "300px";
  explainBox.style.fontSize = "14px";
  explainBox.style.lineHeight = "1.4";
  explainBox.style.transition = "opacity 0.3s ease-in-out";
  explainBox.style.opacity = 0;
  document.body.appendChild(explainBox);
  setTimeout(() => {
    explainBox.style.opacity = 1;
  }, 100);

  // Highlight first important button
  if (buttons.length > 0) {
    const mainBtn = buttons[0];
    mainBtn.style.boxShadow = "0 0 12px 4px #4a90e2";
    mainBtn.style.transition = "box-shadow 0.3s ease-in-out";
    mainBtn.scrollIntoView({ behavior: "smooth", block: "center" });

    // Optional label
    const tag = document.createElement("div");
    tag.innerText = "👉 Try clicking this!";
    tag.style.position = "absolute";
    tag.style.backgroundColor = "#4a90e2";
    tag.style.color = "white";
    tag.style.padding = "6px 10px";
    tag.style.borderRadius = "8px";
    tag.style.fontSize = "12px";
    tag.style.fontWeight = "bold";
    tag.style.zIndex = 9999;

    document.body.appendChild(tag);

    // Position the tag near the button
    const rect = mainBtn.getBoundingClientRect();
    tag.style.top = `${rect.top + window.scrollY - 30}px`;
    tag.style.left = `${rect.left + window.scrollX}px`;
  }
}
