const zone = document.getElementById("zone");
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const result = document.getElementById("result");

  const padding = 12;

  function moveNo() {
    const maxX = zone.clientWidth - noBtn.offsetWidth - padding;
    const maxY = zone.clientHeight - noBtn.offsetHeight - padding;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  }
  zone.addEventListener("mousemove", (e) => {
    const rect = noBtn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 120) moveNo();
  });

  noBtn.addEventListener("mouseenter", moveNo);
  noBtn.addEventListener("mousedown", e => {
    e.preventDefault();
    moveNo();
  });

  yesBtn.addEventListener("click", () => {
  const zone = document.getElementById("zone");

  zone.remove();             
  result.style.display = "block";
});