const greeting = document.querySelector("#greeting");
const themeToggle = document.querySelector(".theme-toggle")

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

document.addEventListener("DOMContentLoaded", async () => {
  const steps = [
    "I'm a high school student...",
    "I love cats and programming ᓚᘏᗢ",
    "Leave a star ",
    "¯\\_(ツ)_/¯",
  ];

  await delay(800);

  for (const s of steps) {
    greeting.classList.remove("blink");
    greeting.innerHTML = "";

    for (const c of s) {
      greeting.innerHTML += c;
      await delay(170);
    }

    greeting.classList.add("blink");
    await delay(2000);
  }
});
