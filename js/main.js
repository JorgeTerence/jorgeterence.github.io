const greeting = document.querySelector("#greeting");

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

document.addEventListener("DOMContentLoaded", async () => {
  const steps = [
    "I'm a high scool student...",
    "I love cats ᓚᘏᗢ",
    "Leave a star ⭐",
    "¯\\_(ツ)_/¯",
  ];

  for (const s of steps) {
    greeting.innerHTML = "";

    for (const c of s) {
      greeting.innerHTML += c;
      await delay(200);
    }

    await delay(2000);
  }
});
