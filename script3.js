document.addEventListener("DOMContentLoaded", () => {
  const WORD_API = "https://random-word-api.herokuapp.com/word";

  const wordEl = document.getElementById("worderrr");
  const countdownEl = document.getElementById("countdown");

  // ---- WORD OF THE DAY ----
  function getTodayKey() {
    const d = new Date();
    return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
  }

  const todayKey = getTodayKey();
  const savedWord = localStorage.getItem("dailyWord");
  const savedKey = localStorage.getItem("wordKey");

  if (savedKey === todayKey && savedWord) {
    wordEl.textContent = savedWord;
  } else {
    fetch(WORD_API)
      .then(res => res.json())
      .then(data => {
        const word = data[0];
        localStorage.setItem("dailyWord", word);
        localStorage.setItem("wordKey", todayKey);
        wordEl.textContent = word;
      })
      .catch(() => {
        wordEl.textContent = "—";
      });
  }

  // ---- COUNTDOWN ----
  function updateCountdown() {
    const now = new Date();
    const nextDay = new Date(now);
    nextDay.setHours(24, 0, 0, 0);

    const diff = nextDay - now;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    countdownEl.textContent = `Next word in ${hours}h ${minutes}m`;
  }

  updateCountdown();
  setInterval(updateCountdown, 60000);
});



