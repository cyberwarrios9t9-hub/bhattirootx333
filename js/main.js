const menuToggle = document.querySelector("#menuToggle");
const nav = document.querySelector("#nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#copyHandle").addEventListener("click", async () => {
  const status = document.querySelector("#copyStatus");
  try {
    await navigator.clipboard.writeText("@bhattirootx333");
    status.textContent = "Handle copied: @bhattirootx333";
  } catch {
    status.textContent = "Your handle: @bhattirootx333";
  }
});
